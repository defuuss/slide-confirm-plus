import { css, html, LitElement } from 'lit';
import { property, state } from 'lit/decorators';

export class SlideConfirmEditor extends LitElement {
  @property({ attribute: false }) public hass: any;
  @state() private _config: any = {};
  @state() private _entityPickerReady = false;

  static styles = css`
    :host { display: block; }
    .grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
    .full { grid-column: 1 / -1; }
    .field { display: flex; flex-direction: column; gap: 6px; }
    label { color: var(--secondary-text-color); font-size: .85rem; }
    input, select, ha-entity-picker { box-sizing: border-box; width: 100%; min-height: 40px; }
    input[type="color"] { height: 42px; padding: 2px; border: 1px solid var(--divider-color); border-radius: 8px; background: var(--card-background-color); }
    details { margin-top: 18px; }
    summary { cursor: pointer; color: var(--primary-color); font-weight: 600; }
    .advanced { padding-top: 14px; }
    .hint { color: var(--secondary-text-color); font-size: .85rem; margin: 0 0 12px; }
  `;

  public setConfig(config: any): void {
    this._config = structuredClone(config || {});
    this._config.sliders = this._config.sliders?.length ? this._config.sliders : [this._defaultSlider()];
  }

  protected firstUpdated(): void {
    this._loadEntityPicker();
  }

  private async _loadEntityPicker(): Promise<void> {
    // HA registers this standard picker through the built-in Glance editor.
    const glanceCard = customElements.get('hui-glance-card') as any;
    if (glanceCard?.getConfigElement) await glanceCard.getConfigElement();
    this._entityPickerReady = Boolean(customElements.get('ha-entity-picker'));
  }

  private _defaultSlider() {
    return {
      name: 'Confirm action', icon: 'mdi:gesture-swipe-right',
      textUnconfirmed: 'Slide to confirm', textConfirmed: 'Done!',
      iconUnconfirmed: 'mdi:chevron-right', iconConfirmed: 'mdi:check',
      confirm_action: { action: 'call-service', service: '', target: { entity_id: '' } },
      appearance: { background_color: '#1976d2', handle_color: '#ffffff', handle_style: '3d', text_color: '#ffffff', confirmed_background_color: '#2e7d32', confirmed_handle_color: '#ffffff', height: 56, handle_size: 48, border_radius: 28 }
    };
  }

  private _value(path: string, fallback = ''): any {
    return path.split('.').reduce((value, key) => value?.[key], this._config) ?? fallback;
  }

  private _update(path: string, value: any): void {
    const next = structuredClone(this._config);
    let target = next;
    const parts = path.split('.');
    for (const part of parts.slice(0, -1)) target = target[part] ||= {};
    target[parts[parts.length - 1]] = value;
    this._config = next;
    this.dispatchEvent(new CustomEvent('config-changed', { detail: { config: next }, bubbles: true, composed: true }));
  }

  private _text(path: string, label: string) {
    return html`<div class="field"><label>${label}</label><input .value=${String(this._value(path))} @input=${(e: Event) => this._update(path, (e.target as HTMLInputElement).value)}></div>`;
  }

  private _number(path: string, label: string, min: number, max: number) {
    return html`<div class="field"><label>${label}</label><input type="number" min=${min} max=${max} .value=${String(this._value(path))} @input=${(e: Event) => this._update(path, Number((e.target as HTMLInputElement).value))}></div>`;
  }

  private _color(path: string, label: string, fallback: string) {
    return html`<div class="field"><label>${label}</label><input type="color" .value=${String(this._value(path, fallback))} @input=${(e: Event) => this._update(path, (e.target as HTMLInputElement).value)}></div>`;
  }

  private _select(path: string, label: string, options: Array<[string, string]>) {
    return html`<div class="field"><label>${label}</label><select .value=${String(this._value(path, options[0][0]))} @change=${(e: Event) => this._update(path, (e.target as HTMLSelectElement).value)}>${options.map(([value, title]) => html`<option value=${value}>${title}</option>`)}</select></div>`;
  }

  private _entityField() {
    const path = 'sliders.0.confirm_action.target.entity_id';
    const value = String(this._value(path));
    if (!this._entityPickerReady) return this._text(path, 'Target entity');
    return html`<div class="field full"><label>Target entity</label><ha-entity-picker .hass=${this.hass} .value=${value} allow-custom-entity @value-changed=${(e: CustomEvent) => this._update(path, e.detail.value)}></ha-entity-picker></div>`;
  }

  render() {
    return html`
      <p class="hint">Choose the entity and service first. The dashboard preview updates as you make changes.</p>
      <div class="grid">
        ${this._text('header', 'Card title')}
        ${this._text('sliders.0.name', 'Slider title')}
        ${this._entityField()}
        <div class="full">${this._text('sliders.0.confirm_action.service', 'Service, for example switch.toggle')}</div>
      </div>
      <details>
        <summary>Style, icons, and text</summary>
        <div class="grid advanced">
          <div class="full">${this._text('sliders.0.textUnconfirmed', 'Instruction text')}</div>
          <div class="full">${this._text('sliders.0.textConfirmed', 'Success text')}</div>
          ${this._text('sliders.0.iconUnconfirmed', 'Round-handle icon')}
          ${this._text('sliders.0.iconConfirmed', 'Success icon')}
          ${this._color('sliders.0.appearance.background_color', 'Background color', '#1976d2')}
          ${this._color('sliders.0.appearance.handle_color', 'Round-handle color', '#ffffff')}
          ${this._select('sliders.0.appearance.handle_style', 'Round-handle style', [['3d', '3D ball'], ['flat', 'Flat circle']])}
          ${this._color('sliders.0.appearance.text_color', 'Text color', '#ffffff')}
          ${this._color('sliders.0.appearance.confirmed_background_color', 'Success background', '#2e7d32')}
          ${this._color('sliders.0.appearance.confirmed_handle_color', 'Success handle', '#ffffff')}
          ${this._number('sliders.0.appearance.height', 'Height (px)', 40, 120)}
          ${this._number('sliders.0.appearance.handle_size', 'Handle size (px)', 32, 100)}
          ${this._number('sliders.0.appearance.border_radius', 'Corner radius (px)', 0, 60)}
        </div>
      </details>
    `;
  }
}

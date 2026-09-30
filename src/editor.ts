import { css, html, LitElement } from 'lit';
import { property, state } from 'lit/decorators';

export class SlideConfirmEditor extends LitElement {
  @property({ attribute: false }) public hass: any;
  @state() private _config: any = {};

  static styles = css`
    :host { display: block; }
    .grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
    .full { grid-column: 1 / -1; }
    .field { display: flex; flex-direction: column; gap: 6px; }
    label { color: var(--secondary-text-color); font-size: 0.85rem; }
    input, ha-textfield { box-sizing: border-box; width: 100%; }
    input[type="color"] { height: 42px; padding: 2px; border: 1px solid var(--divider-color); border-radius: 8px; background: var(--card-background-color); }
    h3 { margin: 20px 0 10px; font-size: 1rem; }
    .hint { color: var(--secondary-text-color); font-size: 0.85rem; margin: 0 0 12px; }
  `;

  public setConfig(config: any): void {
    this._config = structuredClone(config || {});
    this._config.sliders = this._config.sliders?.length ? this._config.sliders : [this._defaultSlider()];
  }

  private _defaultSlider() {
    return {
      name: 'Confirm action', icon: 'mdi:gesture-swipe-right',
      textUnconfirmed: 'Slide to confirm', textConfirmed: 'Done!',
      iconUnconfirmed: 'mdi:chevron-right', iconConfirmed: 'mdi:check',
      confirm_action: { action: 'call-service', service: '', target: { entity_id: '' } },
      appearance: { background_color: '#1976d2', handle_color: '#ffffff', text_color: '#ffffff', confirmed_background_color: '#2e7d32', confirmed_handle_color: '#ffffff', height: 56, handle_size: 48, border_radius: 28 }
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

  private _text(path: string, label: string, type = 'text') {
    return html`<div class="field"><label>${label}</label><input type=${type} .value=${String(this._value(path))} @input=${(e: Event) => this._update(path, (e.target as HTMLInputElement).value)}></div>`;
  }

  private _number(path: string, label: string, min: number, max: number) {
    return html`<div class="field"><label>${label}</label><input type="number" min=${min} max=${max} .value=${String(this._value(path))} @input=${(e: Event) => this._update(path, Number((e.target as HTMLInputElement).value))}></div>`;
  }

  private _color(path: string, label: string, fallback: string) {
    return html`<div class="field"><label>${label}</label><input type="color" .value=${String(this._value(path, fallback))} @input=${(e: Event) => this._update(path, (e.target as HTMLInputElement).value)}></div>`;
  }

  render() {
    return html`
      <p class="hint">Use the controls below to configure the first slider. The dashboard editor updates its live card preview as you change values.</p>
      <div class="grid">
        ${this._text('header', 'Card title')}
        ${this._text('sliders.0.name', 'Slider title')}
        ${this._text('sliders.0.icon', 'Title icon (MDI)')}
        ${this._text('sliders.0.confirm_action.service', 'Service (for example switch.toggle)')}
        <div class="full">${this._text('sliders.0.confirm_action.target.entity_id', 'Target entity')}</div>
        <div class="full">${this._text('sliders.0.textUnconfirmed', 'Instruction text')}</div>
        <div class="full">${this._text('sliders.0.textConfirmed', 'Success text')}</div>
        ${this._text('sliders.0.iconUnconfirmed', 'Handle icon (before)')}
        ${this._text('sliders.0.iconConfirmed', 'Handle icon (after)')}
      </div>
      <h3>Appearance</h3>
      <div class="grid">
        ${this._color('sliders.0.appearance.background_color', 'Background color', '#1976d2')}
        ${this._color('sliders.0.appearance.handle_color', 'Handle color', '#ffffff')}
        ${this._color('sliders.0.appearance.text_color', 'Text color', '#ffffff')}
        ${this._color('sliders.0.appearance.confirmed_background_color', 'Success background', '#2e7d32')}
        ${this._color('sliders.0.appearance.confirmed_handle_color', 'Success handle', '#ffffff')}
        ${this._number('sliders.0.appearance.height', 'Height (px)', 40, 120)}
        ${this._number('sliders.0.appearance.handle_size', 'Handle size (px)', 32, 100)}
        ${this._number('sliders.0.appearance.border_radius', 'Corner radius (px)', 0, 60)}
      </div>
    `;
  }
}

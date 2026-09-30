import { CSSResult, LitElement } from 'lit';
import { html, TemplateResult } from 'lit/development';
import { state } from 'lit/decorators/state';
import { property } from 'lit/decorators/property';
import { query } from 'lit/decorators/query';
import { slideConfirmStyles } from './card.styles';

export interface SlideConfirmButtonConfig {
	name?: string;
	label?: string;
	icon?: string;
	iconConfirmed?: string;
	iconUnconfirmed?: string;
	textConfirmed?: string;
	textUnconfirmed?: string;
	entity?: string;
	appearance?: SlideConfirmAppearance;
	confirmation_duration?: number;
	confirm_action: {
		action: string;
		service: string;
		target?: {
			entity_id?: string | string[];
			device_id?: string | string[];
			area_id?: string | string[];
		};
		data?: Record<string, any>;
	};
};

export interface SlideConfirmAppearance {
	background_color?: string;
	handle_color?: string;
	handle_style?: 'flat' | '3d';
	text_color?: string;
	confirmed_background_color?: string;
	confirmed_handle_color?: string;
	height?: number;
	handle_size?: number;
	border_radius?: number;
}

export class SlideConfirmButton extends LitElement {
	@property({ attribute: false })
	config: SlideConfirmButtonConfig;

	@state()
	private _confirmed = false;

	@query('.slide-confirm')
	private _container;

	@query('.slide-confirm-handle')
	private _handle;

	static styles: CSSResult = slideConfirmStyles;

	private _safeColor(value: unknown, fallback: string): string {
		return typeof value === 'string' && /^#[0-9a-f]{3,8}$/i.test(value) ? value : fallback;
	}

	private _safeNumber(value: unknown, fallback: number, minimum: number, maximum: number): number {
		const number = typeof value === 'number' ? value : Number(value);
		return Number.isFinite(number) ? Math.max(minimum, Math.min(maximum, number)) : fallback;
	}

	private _appearanceStyle(): string {
		const appearance = this.config.appearance || {};
		const height = this._safeNumber(appearance.height, 56, 40, 120);
		const handleSize = Math.min(this._safeNumber(appearance.handle_size, 48, 32, 100), height - 4);
		const radius = this._safeNumber(appearance.border_radius, Math.round(height / 2), 0, 60);
		return [
			`--slide-track-color: ${this._safeColor(appearance.background_color, '#1976d2')}`,
			`--slide-handle-color: ${this._safeColor(appearance.handle_color, '#ffffff')}`,
			`--slide-text-color: ${this._safeColor(appearance.text_color, '#ffffff')}`,
			`--slide-confirmed-track-color: ${this._safeColor(appearance.confirmed_background_color, '#2e7d32')}`,
			`--slide-confirmed-handle-color: ${this._safeColor(appearance.confirmed_handle_color, '#ffffff')}`,
			`--slide-height: ${height}px`, `--slide-handle-size: ${handleSize}px`, `--slide-radius: ${radius}px`
		].join(';');
	}

	dragStart(e: PointerEvent) {
		if (this._confirmed || e.button !== 0) return;
		this._handle.classList.add('dragging');
		this._handle.onpointermove = this.drag.bind(this);
		this._handle.setPointerCapture(e.pointerId);
	}

	dragEnd(e: PointerEvent) {
		const x = this._calculateX(e);
		if (x >= this._container.clientWidth - this._handle.clientWidth - 2 && !this._confirmed) {
			this._confirmed = true;
			this._container.classList.add('confirmed');
			if (this.config.confirm_action) {
				this.dispatchEvent(new CustomEvent('call-action', {
					detail: this.config.confirm_action, bubbles: true, composed: true
				}));
			}
			setTimeout(() => {
				this._container.classList.remove('confirmed');
				this._confirmed = false;
			}, this._safeNumber(this.config.confirmation_duration, 1500, 500, 10000));
		}
		this._handle.classList.remove('dragging');
		this._handle.onpointermove = null;
		if (this._handle.hasPointerCapture(e.pointerId)) this._handle.releasePointerCapture(e.pointerId);
		this._handle.style.transform = 'translateX(0)';
	}

	private _calculateX(e: PointerEvent) {
		const bounds = this._container.getBoundingClientRect();
		let x = e.clientX - bounds.x - (this._handle.clientWidth / 2);
		if (x < 0) x = 0;
		else if (x + this._handle.clientWidth >= this._container.clientWidth) x = this._container.clientWidth - this._handle.clientWidth;
		return x;
	}

	drag(e: PointerEvent) {
		this._handle.style.transform = `translateX(${this._calculateX(e)}px)`;
	}

	render() {
		const content: TemplateResult = html`
			${this.config.icon ? html`<ha-icon icon=${this.config.icon} />` : ''}
			${this.config.name ? html`<span class="slide-name">${this.config.name}</span>` : ''}
			${this.config.label ? html`<span class="slide-label">${this.config.label}</span>` : ''}
			<div class="slide-confirm" style=${this._appearanceStyle()}>
				<div class="slide-confirm-track"></div>
				<div class="slide-confirm-text unconfirmed">${this.config.textUnconfirmed}</div>
				<div class="slide-confirm-text confirmed">${this.config.textConfirmed}</div>
				<div class=${`slide-confirm-handle ${this.config.appearance?.handle_style === 'flat' ? 'flat' : 'three-d'}`} role="slider" aria-label=${this.config.name || 'Confirm action'}
					@pointerdown=${(e: PointerEvent) => this.dragStart(e)}
					@pointerup=${(e: PointerEvent) => this.dragEnd(e)}
					@pointercancel=${(e: PointerEvent) => this.dragEnd(e)}>
					<div class="slide-confirm-icon unconfirmed"><ha-icon icon=${this.config.iconUnconfirmed || 'mdi:chevron-right'} /></div>
					<div class="slide-confirm-icon confirmed"><ha-icon icon=${this.config.iconConfirmed || 'mdi:check'} /></div>
				</div>
			</div>`;
		return content;
	}
}

import { SlideConfirmCard } from "./card";
import { SlideConfirmButton } from './slide-confirm';
import { SlideConfirmEditor } from './editor';

declare global {
	interface Window {
		customCards: Array<Object>;
	}
}

customElements.define("slide-confirm-card", SlideConfirmCard);
customElements.define("slide-confirm", SlideConfirmButton);
customElements.define("slide-confirm-editor", SlideConfirmEditor);

window.customCards = window.customCards || [];
window.customCards.push({
	type: "slide-confirm-card",
	name: "Slide Confirm Plus",
	description: "A configurable slide-to-confirm card with a visual editor and color pickers."
});

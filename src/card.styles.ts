import { css } from 'lit';

export const slideConfirmStyles = css`
  :host { display: block; }
  .slide-confirm {
    color: var(--slide-text-color, var(--text-primary-color));
    height: var(--slide-height, 56px);
    border-radius: var(--slide-radius, 28px);
    padding: 0;
    font-size: .75em;
    position: relative;
    display: flex;
    align-items: center;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    margin: 8px 0;
  }

  .slide-confirm-track {
    position: absolute;
    inset: 0;
    background-color: var(--slide-track-color, var(--primary-color));
    transition: background-color 250ms;
    opacity: var(--slide-track-opacity, .92);
    border-radius: var(--slide-radius, 28px);
  }

  .slide-confirm-text {
    display: inline-block;
    position: absolute;
    left: 0;
    width: 100%;
    top: 50%;
    text-align: center;
    transform: translateY(-50%);
    font-size: 1rem;
    font-weight: 600;
    color: var(--slide-text-color, var(--text-primary-color));
    pointer-events: none;
  }

  .slide-confirm-handle {
    position: relative;
    width: var(--slide-handle-size, 48px);
    height: var(--slide-handle-size, 48px);
    margin: 0;
    border-radius: 50%;
    border: 2px solid color-mix(in srgb, var(--slide-track-color, var(--primary-color)) 35%, #000);
    background: radial-gradient(circle at 32% 27%, color-mix(in srgb, var(--slide-handle-color, #ffffff) 42%, #ffffff), var(--slide-handle-color, #ffffff) 58%, color-mix(in srgb, var(--slide-handle-color, #ffffff) 76%, #000000));
    box-shadow: rgba(0, 0, 0, .28) 0 5px 10px, inset rgba(255, 255, 255, .48) 0 1px 1px;
    box-sizing: border-box;
    text-align: center;
    font-size: 20px;
    line-height: 1;
    color: var(--slide-track-color, var(--primary-color));
    user-select: none;
    touch-action: none;
    transition: transform 180ms;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .slide-confirm-handle.start-left { left: 0; }
  .slide-confirm-handle.start-centered { left: calc(50% - var(--slide-handle-size, 48px) / 2); }
  .slide-confirm-handle.dragging { transition: none; }
  .slide-confirm-handle:hover { cursor: grab; }
  .slide-confirm-handle:active { cursor: grabbing; }
  .slide-confirm-handle.flat {
    background: var(--slide-handle-color, var(--card-background-color));
    box-shadow: rgba(0, 0, 0, .24) 0 3px 8px;
  }

  .slide-confirm.confirmed .slide-confirm-track {
    background-color: var(--slide-confirmed-track-color, var(--success-color));
    opacity: var(--slide-confirmed-track-opacity, .96);
  }
  .slide-confirm.confirmed .slide-confirm-handle {
    border-color: color-mix(in srgb, var(--slide-confirmed-track-color, var(--success-color)) 35%, #000);
    background: radial-gradient(circle at 32% 27%, color-mix(in srgb, var(--slide-confirmed-handle-color, #ffffff) 42%, #ffffff), var(--slide-confirmed-handle-color, #ffffff) 58%, color-mix(in srgb, var(--slide-confirmed-handle-color, #ffffff) 76%, #000000));
    color: var(--slide-confirmed-track-color, var(--success-color));
  }
  .slide-confirm.confirmed .slide-confirm-handle.flat {
    background: var(--slide-confirmed-handle-color, var(--card-background-color));
  }

  .slide-confirm .unconfirmed { display: block; }
  .slide-confirm .confirmed { display: none; }
  .slide-confirm.confirmed .unconfirmed { display: none; }
  .slide-confirm.confirmed .confirmed { display: block; }
`;

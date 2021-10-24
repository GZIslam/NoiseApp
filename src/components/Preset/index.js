import "./index.sass";

import { html } from "sinuous";

export const Preset = (props, onClick, onNextClick) => {
    let iconElement = html`<img src=${props.icon} />`;
    let nameElement = html`<p>${props.name}</p>`;
    let nextButton = html`<button>Next</button>`;

    let buttonPreset = html`
        <div>
            ${iconElement}
            ${nameElement}
        </div>
    `;

    let element = html`
        <div class="preset">
            ${buttonPreset}
            ${nextButton}
        </div>
    `;

    element.currentIndex = 0;

    buttonPreset.addEventListener("click", () => onClick(props.audios));
    nextButton.addEventListener("click", () => onNextClick(props.audios, element.currentIndex))

    return element;
}
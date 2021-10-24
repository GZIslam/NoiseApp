import "./index.sass";

import { html } from "sinuous";

let activeTab = undefined;

const activateTab = (tab) => {
    if(activeTab) activeTab.classList.remove("active");
    tab.classList.add("active");
    activeTab = tab;
};

export const Controls = props => {
    let presetsButton = html`<button>Presets</button>`;
    let savedButton = html`<button>Saved</button>`;
    let saveButton = html`<button>Save</button>`;
    let clearButton = html`<button>Clear</button>`;

    presetsButton.addEventListener("click", () => {
        activateTab(props.presets);
        console.log(props);
    });

    savedButton.addEventListener("click", () => {
        activateTab(props.saved);
    });

    saveButton.addEventListener("click", () => {
        props.save("save");
    });

    clearButton.addEventListener("click", () => {
        props.clear(true);
    });

    let leftSide = html`
        <div class="left-side">
            ${presetsButton}
            ${savedButton}
        </div>
    `;

    let rightSide = html`
        <div class="right-side">
            ${saveButton}
            ${clearButton}
        </div>
    `;

    let element = html`
        <div class="controls">
            ${leftSide}
            ${rightSide}
        </div>
    `;

    return element;
};
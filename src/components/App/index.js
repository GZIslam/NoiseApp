import "./index.sass";

import { html, o } from "sinuous";
import { map } from "sinuous/map"
import { Controls } from "../Controls";
import { SoundTile } from "../SoundTile";

let soundTilesMap = {};

const onClick = id => {
    soundTilesMap[id].activate();
}
const onChange = (id, value) => {
    soundTilesMap[id].setVolume(value, true);
};

const clearSoundTiles = () => {
    for(let key in soundTilesMap) {
        if(soundTilesMap[key].active) {
            soundTilesMap[key].activate();
        }
    }
};

export const App = props => {
    let presetsPlace = html`<div class="presets tab"></div>`;
    let savedPlace = html`<div class="saved tab"></div>`;
    let soundTiles = o([]);


    let controls = Controls({
        presets: presetsPlace,
        saved: savedPlace,
        save: console.log,
        clear: clearSoundTiles
    });

    let soundTilesPlace = html`
        <div class="sound-tiles">
            ${map(soundTiles, soundTile => soundTile)}
        </div>
    `;
    
    let element = html`
        <div class="app">
            <div class="logo"></div>
            ${controls}
            ${presetsPlace}
            ${savedPlace}
            ${soundTilesPlace}
        </div>
    `;

    element.addSoundTile = item => {
        let soundTile = SoundTile(item, onClick, onChange);
        soundTilesMap[item.id] = soundTile;

        let list = soundTiles();
        list.push(soundTile);
        soundTiles(list);
        soundTilesPlace.append(soundTile);
    };

    element.addSoundTiles = items => {
        items.forEach(item => {
            element.addSoundTile(item);
        });
    }

    return element;
}
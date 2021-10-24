import "./index.sass";

import { content as soundTiles} from "./base/sound-tile-content";
import { App } from "./components/App";
import { SoundTile } from "./components/SoundTile";


const app = App();

// app.addPresets(presets);
app.addSoundTiles(soundTiles);

document.body.append(app);
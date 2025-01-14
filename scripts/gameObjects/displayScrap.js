import { BaseGameObject } from "./baseGameObject.js";
import { global } from "../modules/global.js";

class DisplayScrap extends BaseGameObject {
    name = "DisplayScrap";

    constructor(x, y, width, height, src) {
        super(x, y, width, height);
        this.loadImages([src]);
    }

}

export { DisplayScrap }
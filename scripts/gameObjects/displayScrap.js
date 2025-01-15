import { BaseGameObject } from "./baseGameObject.js";
import { global } from "../modules/global.js";

class DisplayScrap extends BaseGameObject {
    name = "DisplayScrap";
    active = false;
    id = 0;

    constructor(x, y, width, height, src, id) {
        super(x, y, width, height);
        this.id = id;
        this.loadImages([src]);
    }

}

export { DisplayScrap }
import { BaseGameObject } from "./baseGameObject.js";
import { global } from "../modules/global.js";

class Heart extends BaseGameObject {
    name = "Heart";
    active = false;
    numberOfHearts = 3;
    
    constructor(x, y, width, height, src) {
        super(x, y, width, height);
        this.loadImages([src]);
    }

}

export { Heart };
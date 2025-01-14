import { BaseGameObject } from "./baseGameObject.js";
import { global } from "../modules/global.js";

class Spaceship extends BaseGameObject {
    name = "Spaceship";

    constructor(x, y, width, height, src) {
        super(x, y, width, height);
        this.loadImages([src]);
    }

}

export { Spaceship };
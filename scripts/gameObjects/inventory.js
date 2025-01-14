import { BaseGameObject } from "./baseGameObject.js";
import { global } from "../modules/global.js";

class Inventory extends BaseGameObject {
    name = "Inventory";
    active = false;

    // //replace with inventory bar image
    // draw = function () {
    //     global.ctx.drawImage(src, this.x, this.y, this.width, this.height);
    // }

    constructor(x, y, src) {
        super(x, y, 180, 60);
        this.loadImages([src]);

    }

}

export { Inventory };
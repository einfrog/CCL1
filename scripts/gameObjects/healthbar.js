import { BaseGameObject } from "./baseGameObject.js";
import { global } from "../modules/global.js";

class Healthbar extends BaseGameObject {
    name = "Healthbar";
    active = false;

    // //replace with health bar image
    // draw = function () {
    //     global.ctx.beginPath();
    //     global.ctx.rect(this.x, this.y, this.width, this.height);
    //     global.ctx.stroke();
    // }

    constructor(x, y, src) {
        super(x, y, 180, 60);
        this.loadImages([src]);
    }

}

export { Healthbar };
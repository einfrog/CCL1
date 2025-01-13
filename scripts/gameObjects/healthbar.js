import { BaseGameObject } from "./baseGameObject.js";
import { global } from "../modules/global.js";

class Healthbar extends BaseGameObject {
    name = "Healthbar";

    //replace with health bar image
    draw = function () {
        global.ctx.beginPath();
        global.ctx.rect(this.x, this.y, this.width, this.height);
        global.ctx.stroke();
    }

    constructor(x, y) {
        super(x, y, 180, 60);
    }

}

export { Healthbar };
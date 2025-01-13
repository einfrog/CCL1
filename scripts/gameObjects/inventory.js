import { BaseGameObject } from "./baseGameObject.js";
import { global } from "../modules/global.js";

class Inventory extends BaseGameObject {
    name = "Inventory";

    //replace with inventory bar image
    draw = function () {
        global.ctx.beginPath();
        global.ctx.rect(this.x, this.y, this.width, this.height);
        global.ctx.stroke();
    }

    constructor(x, y) {
        super(x, y, 180, 60);
    }

}

export { Inventory };
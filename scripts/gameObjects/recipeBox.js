import { BaseGameObject } from "./baseGameObject.js";
import { global } from "../modules/global.js";

class RecipeBox extends BaseGameObject {
    name = "RecipeBox";

    //replace with recipe box
    draw = function () {
        global.ctx.beginPath();
        global.ctx.rect(this.x, this.y, this.width, this.height);
        global.ctx.stroke();
    }

    constructor(x, y) {
        super(x, y, 300, 60);
    }

}

export { RecipeBox };
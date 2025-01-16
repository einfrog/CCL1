import { BaseGameObject } from "./baseGameObject.js";
import { global } from "../modules/global.js";

class RecipeBox extends BaseGameObject {
    name = "RecipeBox";
    active = false;

    // //replace with recipe box
    // draw = function () {
    //     global.ctx.beginPath();
    //     global.ctx.rect(this.x, this.y, this.width, this.height);
    //     global.ctx.stroke();
    // }

    constructor(x, y, width, height, src) {
        super(x, y, width, height);
        this.loadImages([src]);
    }

}

export { RecipeBox };
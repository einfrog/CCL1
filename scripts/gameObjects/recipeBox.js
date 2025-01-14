import { BaseGameObject } from "./baseGameObject.js";
import { global } from "../modules/global.js";

class RecipeBox extends BaseGameObject {
    name = "RecipeBox";

    // //replace with recipe box
    // draw = function () {
    //     global.ctx.beginPath();
    //     global.ctx.rect(this.x, this.y, this.width, this.height);
    //     global.ctx.stroke();
    // }

    constructor(x, y, src) {
        super(x, y, 250 - 10, 60);
        this.loadImages([src]);
    }

}

export { RecipeBox };
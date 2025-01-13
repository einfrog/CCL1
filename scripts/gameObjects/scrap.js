import { BaseGameObject } from "./baseGameObject.js";
import { global } from "../modules/global.js";

class Scrap extends BaseGameObject {
    name = "Scrap";


    constructor(x, y, width, height, src) {
        super(x, y, width, height);
        // this.loadImages(["./img/scraps/placeholder1.png"]);
        this.loadImages([src]);
        // this.loadImagesFromSpritesheet("./img/BODY_skeleton.png", 9, 4);
    }

}

export { Scrap }
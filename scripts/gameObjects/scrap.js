import { BaseGameObject } from "./baseGameObject.js";
import { global } from "../modules/global.js";

class Scrap extends BaseGameObject {
    name = "Scrap";

    reactToCollision = function(collidingObject)  {
        if (collidingObject.name == "RoryPlayer") {
            // global.putScrapInInventory();
        }
        console.log("collided with player")
    }

    constructor(x, y, width, height, src) {
        super(x, y, width, height);
        this.loadImages([src]);
    }

}

export { Scrap }
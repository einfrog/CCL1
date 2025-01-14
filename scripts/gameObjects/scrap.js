import { BaseGameObject } from "./baseGameObject.js";
import { global } from "../modules/global.js";

class Scrap extends BaseGameObject {
    name = "Scrap";

    reactToCollision = function(collidingObject)  {
        if (collidingObject.name == "RoryPlayer") {
            // this.isDrawn = false;
            this.active = false;
            this.x = 310 + 10 + 50+10+50+10;
            this.y = 600 - 10 - 50;
            global.inventoryScrap = this;
            console.log("collided with player");
            console.log("InventoryScrap: ", global.inventoryScrap);
        }
    }

    constructor(x, y, width, height, src) {
        super(x, y, width, height);
        this.loadImages([src]);
    }

}

export { Scrap }
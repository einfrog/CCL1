import { BaseGameObject } from "./baseGameObject.js";
import { global } from "../modules/global.js";

class Scrap extends BaseGameObject {
    name = "Scrap";
    id = 0;

    //stop collision detection with "collected" scrap and draw it inside of the inventory
    reactToCollision = function(collidingObject)  {
        if (collidingObject.name == "RoryPlayer" && global.inventoryScrap == 0 && global.installedScraps.length < 5) {
            // this.isDrawn = false;
            this.active = false;
            this.x = 310 + 10 + 50+10+50+10;
            this.y = 600 - 10 - 50;
            global.inventoryScrap = this;
            console.log("Scrap collided with player");
            console.log("InventoryScrap: ", global.inventoryScrap);
        }
    }

    constructor(x, y, width, height, src, id) {
        super(x, y, width, height);
        this.id = id;
        this.loadImages([src]);
    }

}

export { Scrap }
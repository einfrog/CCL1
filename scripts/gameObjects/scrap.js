import { BaseGameObject } from "./baseGameObject.js";
import { global } from "../modules/global.js";

class Scrap extends BaseGameObject {
    name = "Scrap";
    id = 0;

    //stop collision detection with "collected" scrap and draw it inside of the inventory
    reactToCollision = function(collidingObject)  {
        if (collidingObject.name == "RoryPlayer" && global.inventoryScrap === null && global.installedScraps.length < 5) {
            collidingObject.collidingScrap = this;
            console.log("Colliding scrap: ", collidingObject.collidingScrap);
            
            // global.inventoryScrap = this;
            console.log("Scrap collided with player");
        }
    }

    constructor(x, y, width, height, src, id) {
        super(x, y, width, height);
        this.id = id;
        this.loadImages([src]);
    }

}

export { Scrap }
import { BaseGameObject } from "./baseGameObject.js";
import { global } from "../modules/global.js";

class Scrap extends BaseGameObject {
    name = "Scrap";
    id = 0;

    update = function () {
        //if scrap is in inventory, carry it with player
        if (global.inventoryScrap === this) {
            this.x = global.playerObject.x + global.playerObject.width / 2;
            this.y = global.playerObject.y + 50;
        }
    }

    //stop collision detection with "collected" scrap and draw it inside of the inventory
    reactToCollision = function (collidingObject) {
        if (collidingObject.name == "RoryPlayer" && global.inventoryScrap === null && global.installedScraps.length < 5) {
            //set collidingScrap to colliding scrap instance
            collidingObject.collidingScrap = this;
            //check collidingScrap
            // console.log("Colliding scrap: ", collidingObject.collidingScrap);

            // global.inventoryScrap = this;
            // console.log("Scrap collided with player");
        }
    }

    constructor(x, y, width, height, src, id) {
        super(x, y, width, height);
        this.id = id;
        this.loadImages([src]);
    }

}

export { Scrap }
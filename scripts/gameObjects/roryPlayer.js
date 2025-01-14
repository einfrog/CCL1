import { BaseGameObject } from "./baseGameObject.js";
import { global } from "../modules/global.js";

class RoryPlayer extends BaseGameObject {
    name = "RoryPlayer";
    xVelocity = 0;
    yVelocity = 0;

    // //bump in canvas border
    // stayInCanvas = function () {
    //     if (this.x + this.width > global.canvas.width) {
    //         this.x = global.previousX;
    //     }
    // }

    update = function () {
        //store difference of position between one frame and the next
        const dx = this.xVelocity * global.deltaTime;
        const dy = this.yVelocity * global.deltaTime;

        //check if object would go out of border in next frame, skip function if it does
        // note: precision is not important, because the gameplay is centered around the middle of the map
        if (this.x + this.width + dx >= global.canvas.width ||
            this.y + this.height + dy >= global.canvas.height || 
            this.x + dx < 0 ||
            this.y + dy < 0) {
            return;
        }

        this.x += dx;
        this.y += dy;
        if (this.xVelocity == 0) {
            global.playerObject.switchCurrentSprites(this.animationData.firstSpriteIndex, this.animationData.firstSpriteIndex);
        }
    }

    constructor(x, y, width, height) {
        super(x, y, width, height);
        //this.loadImages(["./images/apple.png"]);
        this.loadImagesFromSpritesheet("./img/dummyRory.png", 4, 1);
        console.log(this.animationData.animationSprites.length)
    }

    // reactToCollision = function(collidingObject) {
    //     switch(collidingObject.name) {

    //     }
    // }
}


export { RoryPlayer };
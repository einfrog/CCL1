import { BaseGameObject } from "./baseGameObject.js";
import { global } from "../modules/global.js";

class RoryPlayer extends BaseGameObject {
    name = "RoryPlayer";
    xVelocity = 0;
    yVelocity = 0;
    health = 3;
    collidingScrap = null;
    canTakeDamage = true;
    // receivedDamage = 0;

    resetTakeDamage = function () {
        this.canTakeDamage = true;
        // this.receivedDamage = 0;
        console.log("can take damage again");
    }

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
        //idle animation
        if (this.xVelocity == 0 && this.yVelocity == 0) {
            global.playerObject.switchCurrentSprites(this.animationData.firstSpriteIndex, this.animationData.firstSpriteIndex);
        }

        if (global.gameOver !== true){
            // console.log("health: ", global.playerObject.health);

        }
        // console.log(this.canTakeDamage)
        // console.log(this.collidingObjects["SpaceshipVicinity"]);
        // console.log(this.receivedDamage);
        // console.log(this.animationData.currentSpriteIndex)
    }

    reactToCollision = function (collidingObject) {
        switch (collidingObject.name) {
            case "Spaceship":
                console.log("Rory collided with the Spaceship");
                this.xVelocity = 0;
                this.yVelocity = 0;
                this.x = this.previousX;
                this.y = this.previousY;
                break;
            case "Enemy":
                // console.log("collides with enemy");
                if (this.canTakeDamage == true && this.health > 0) {
                    this.health -= 1;
                    const heartToDelete = global.hearts.pop();
                    const index = global.allGameObjects.indexOf(heartToDelete);
                    global.allGameObjects.splice(index, 1);
                    this.canTakeDamage = false;
                    setTimeout(this.resetTakeDamage.bind(this), 1000);
                    // end game when no health is left
                    if (global.playerObject.health <= 0) {
                        console.log("game ends")
                        global.endGame(false);
                    }
                }
                break;
        }
    }

    constructor(x, y, width, height) {
        super(x, y, width, height);
        //this.loadImages(["./images/apple.png"]);
        this.loadImagesFromSpritesheet("./img/spriteTest.png", 4, 5);
    }

    // reactToCollision = function(collidingObject) {
    //     switch(collidingObject.name) {

    //     }
    // }
}


export { RoryPlayer };
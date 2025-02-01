import { global } from "../modules/global.js";
import { BaseGameObject } from "./baseGameObject.js";

class Enemy extends BaseGameObject {
    name = "Enemy";
    xVelocity = 0;
    yVelocity = -200;

    animationData = {
        "animationSprites": [],
        "timePerSprite": 0.3,
        "currentSpriteElapsedTime": 0,
        "firstSpriteIndex": 0,
        "lastSpriteIndex": 0,
        "currentSpriteIndex": 0
    };

    randomMovementData = {
        "timeToChangeDirection": 6,
        "currentDirectionElapsedTime": 0,
        "movementChangePossibilityStartValue": 0.1,
        "movementChangePossibility": 0.1,
        "movementChangePossibilitySteps": 0.02,
        "movementChangeOppositePossibility": 0.3
    };

    update = function () {
        // Store difference of position between one frame and the next
        const dx = this.xVelocity * global.deltaTime;
        const dy = this.yVelocity * global.deltaTime;
    
        // Prevent movement outside canvas bounds (math.may returns largest argument)
        this.x = Math.max(global.getCanvasBounds().left + 50, Math.min(this.x + dx, global.getCanvasBounds().right - this.width - 50));
        this.y = Math.max(global.getCanvasBounds().top + 100, Math.min(this.y + dy, global.getCanvasBounds().bottom - this.height));
    
        // Check if the enemy needs to change direction due to boundaries
        if (this.x === global.getCanvasBounds().right - this.width - 50 || this.x === global.getCanvasBounds().left + 50 ||
            this.y === global.getCanvasBounds().bottom - this.height || this.y === global.getCanvasBounds().top + 100) {
            this.changeMovement();
        }
    
        // Update random movement timer
        this.randomMovementData.currentDirectionElapsedTime += global.deltaTime;
    
        if (this.randomMovementData.currentDirectionElapsedTime >= this.randomMovementData.timeToChangeDirection) {
            this.randomizeMovement();
            this.randomMovementData.currentDirectionElapsedTime = 0;
        }
    };
    

    randomizeMovement = function () {
        const shouldChange = Math.random();
        if (shouldChange > this.randomMovementData.movementChangePossibility) {
            this.changeMovement();
            this.randomMovementData.movementChangePossibility = this.randomMovementData.movementChangePossibilityStartValue;
        } else {
            this.randomMovementData.movementChangePossibility += this.randomMovementData.movementChangePossibilitySteps;
        }
    }

    changeMovement = function () {
        const shouldGoOpposite = Math.random();
        if (shouldGoOpposite < this.randomMovementData.movementChangeOppositePossibility) {
            this.xVelocity *= -1;
            this.yVelocity *= -1;
        } else {
            const makePositive = Math.random();
            if (this.xVelocity !== 0) {
                this.yVelocity = 200 * (makePositive > 0.5 ? 1 : -1);
                this.xVelocity = 0;
            } else if (this.yVelocity !== 0) {
                this.xVelocity = 200 * (makePositive > 0.5 ? 1 : -1);
                this.yVelocity = 0;
            }
        }
    }

    reactToCollision = function (collidingObject) {
        if (collidingObject.name === "Spaceship") {
            console.log("collided with spaceship");
            this.x = this.previousX - 0.01 * this.xVelocity;
            this.y = this.previousY - 0.01 * this.yVelocity;
            const originalProbability = this.randomMovementData.movementChangeOppositePossibility;
            this.randomMovementData.movementChangeOppositePossibility = 0;
            this.changeMovement();
            this.randomMovementData.movementChangeOppositePossibility = originalProbability;
        }
    }

    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.loadImagesFromSpritesheet("./img/enemySprite.png", 4, 1);
        this.switchCurrentSprites(0, 3);

    }

}

export { Enemy };
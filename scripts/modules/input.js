import { global } from "./global.js";

function move(event) {

    //movement for player, for WASD
    switch(event.key) {
        case "d":
            // IDLE SPRITE(?)
            // if (global.playerObject.xVelocity == 0)
            //     global.playerObject.switchCurrentSprites(27, 35);
            //switch current sprites to be used
            // global.playerObject.switchCurrentSprites(3, 5);
            global.playerObject.xVelocity = 200;
            global.playerObject.yVelocity = 0;
            // console.log(global.firstSpriteIndex, global.animationData.firstSpriteIndex, global.animationData.lastSpriteIndex);
            break;
        case "a":
            // IDLE
            // if (global.playerObject.xVelocity == 0)
            //     global.playerObject.switchCurrentSprites(9, 17);
            //switch current sprites to be used
            // global.playerObject.switchCurrentSprites(3, 5);
            global.playerObject.xVelocity = -200;
            global.playerObject.yVelocity = 0;
            // console.log(global.firstSpriteIndex, global.animationData.firstSpriteIndex, global.animationData.lastSpriteIndex);
            break;
       case "w":
            global.playerObject.xVelocity = 0;
            global.playerObject.yVelocity = -200;
            //switch set of sprites to be used
            // global.playerObject.switchCurrentSprites(9, 11);
            // console.log(global.firstSpriteIndex, global.animationData.firstSpriteIndex, global.animationData.lastSpriteIndex);
            break;
        case "s":
            global.playerObject.xVelocity = 0;
            global.playerObject.yVelocity = 200;
            //switch set of sprites to be used
            // global.playerObject.switchCurrentSprites(3, 5);
            // console.log(global.firstSpriteIndex, global.animationData.firstSpriteIndex, global.animationData.lastSpriteIndex);
            break;
    }
}

function stop() {

    //stop
    global.playerObject.xVelocity = 0;
    global.playerObject.yVelocity = 0;
}

//add movement to pressing WASD
document.addEventListener("keypress", move);

//stop if player lifts key
document.addEventListener("keyup", stop);

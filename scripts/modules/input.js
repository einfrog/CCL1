import { global } from "./global.js";

function move(event) {

    //movement for player, for WASD
    switch (event.key) {
        case "d":
            // IDLE SPRITE(?)
            // if (global.playerObject.xVelocity == 0)
            //     global.playerObject.switchCurrentSprites(4, 4);
            //switch current sprites to be used
            global.playerObject.switchCurrentSprites(3, 3);
            global.playerObject.xVelocity = 200;
            global.playerObject.yVelocity = 0;
            // console.log(global.firstSpriteIndex, global.animationData.firstSpriteIndex, global.animationData.lastSpriteIndex);
            break;
        case "a":
            // IDLE
            // if (global.playerObject.xVelocity == 0)
            //     global.playerObject.switchCurrentSprites(9, 17);
            //switch current sprites to be used
            global.playerObject.switchCurrentSprites(1, 1);
            global.playerObject.xVelocity = -200;
            global.playerObject.yVelocity = 0;
            // console.log(global.firstSpriteIndex, global.animationData.firstSpriteIndex, global.animationData.lastSpriteIndex);
            break;
        case "w":
            global.playerObject.xVelocity = 0;
            global.playerObject.yVelocity = -200;
            //switch set of sprites to be used
            global.playerObject.switchCurrentSprites(2, 2);
            // console.log(global.firstSpriteIndex, global.animationData.firstSpriteIndex, global.animationData.lastSpriteIndex);
            break;
        case "s":
            global.playerObject.xVelocity = 0;
            global.playerObject.yVelocity = 200;
            //switch set of sprites to be used
            global.playerObject.switchCurrentSprites(0, 0);
            // console.log(global.firstSpriteIndex, global.animationData.firstSpriteIndex, global.animationData.lastSpriteIndex);
            break;
    }
}

function stop() {

    //stop
    global.playerObject.xVelocity = 0;
    global.playerObject.yVelocity = 0;
}

//function to either install scraps or drop them   
function manageInventory(event) {
    if (global.inventoryScrap !== 0) {
        switch (event.key) {
            case "i":
                console.log("installing scrap");
                global.installedScraps.push(global.inventoryScrap);
                console.log("Installed Scraps: ", global.installedScraps);
                global.inventoryScrap = 0;
                console.log("Inventory Scrap: ", global.inventoryScrap);

                if (global.installedScraps.length < 4) {
                    for (let i in global.installedScraps) {
                        global.installedScraps[i].x = (global.canvas.width / 2 - 120 / 2 + 10 + (35 * i));
                        global.installedScraps[i].y = 10 + 10;
                    }
                } else {
                    for (let i = 3; i < global.installedScraps.length; i++) {
                        console.log(global.installedScraps[i]);
                        global.installedScraps[i].x = (global.canvas.width / 2 - 120 / 2 + 10 + 20 + (35 * (i - 3)));
                        global.installedScraps[i].y = 10 + 70;
                    }
                }
                break;
            case "u":
                //DOESNT WORK
                // console.log("trying to drop scrap");
                // global.inventoryScrap.x += 10;
        }


        // for (let i in global.installedScraps) {
        //     if (global.installedScraps.length < 4) {
        //         global.installedScraps[i].x = (global.canvas.width / 2 - 120 / 2 + 10 + (35 * i));
        //         global.installedScraps[i].y = 10 + 10;
        //     } else {
        //         global.installedScraps[i].x = (global.canvas.width / 2 - 120 / 2 + 10 + (35 * i));
        //         global.installedScraps[i].y = 10 + 70;
        //     }

        // }
    }
}

//add movement to pressing WASD
document.addEventListener("keypress", move);

document.addEventListener("keypress", manageInventory);

//stop if player lifts key
document.addEventListener("keyup", stop);

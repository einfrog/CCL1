import { global } from "./global.js";

let lastPressedKey;

export function move(event) {

    //movement for player, for WASD
    switch (event.key) {
        case "d":
            // IDLE SPRITE(?)
            // if (global.playerObject.xVelocity == 0)
            //     global.playerObject.switchCurrentSprites(4, 4);
            //switch current sprites to be used
            global.playerObject.switchCurrentSprites(12, 15);
            global.playerObject.xVelocity = 200;
            global.playerObject.yVelocity = 0;
            lastPressedKey = event.key;
            // console.log(global.firstSpriteIndex, global.animationData.firstSpriteIndex, global.animationData.lastSpriteIndex);
            break;
        case "a":
            // IDLE
            // if (global.playerObject.xVelocity == 0)
            //     global.playerObject.switchCurrentSprites(9, 17);
            //switch current sprites to be used
            global.playerObject.switchCurrentSprites(16, 19);
            global.playerObject.xVelocity = -200;
            global.playerObject.yVelocity = 0;
            lastPressedKey = event.key;
            // console.log(global.firstSpriteIndex, global.animationData.firstSpriteIndex, global.animationData.lastSpriteIndex);
            break;
        case "w":
            global.playerObject.xVelocity = 0;
            global.playerObject.yVelocity = -200;
            //switch set of sprites to be used
            global.playerObject.switchCurrentSprites(8, 10);
            lastPressedKey = event.key;
            // console.log(global.firstSpriteIndex, global.animationData.firstSpriteIndex, global.animationData.lastSpriteIndex);
            break;
        case "s":
            // IDLE
            // if (global.playerObject.xVelocity == 0)
            //     global.playerObject.switchCurrentSprites(1,1);
            global.playerObject.xVelocity = 0;
            global.playerObject.yVelocity = 200;
            //switch set of sprites to be used
            global.playerObject.switchCurrentSprites(4,6);
            lastPressedKey = event.key;
            // console.log(global.firstSpriteIndex, global.animationData.firstSpriteIndex, global.animationData.lastSpriteIndex);
            break;
    }
}

export function stop(event) {
    if (event.key === lastPressedKey) {
        //stop
        global.playerObject.xVelocity = 0;
        global.playerObject.yVelocity = 0;
    }
}

//function to either install scraps or drop them   
export function manageInventory(event) {

    switch (event.key) {
        //pick up scrap
        case "j":
            if (global.playerObject.collidingScrap !== null) {
                global.inventoryScrap = global.playerObject.collidingScrap;
                console.log("InventoryScrap: ", global.inventoryScrap);

                global.playerObject.collidingScrap.active = false;
                //player is no longer colliding with the scrap (and can't pick it up)
                global.playerObject.collidingScrap = null;
                
                //put in inventory space
                // global.playerObject.collidingScrap.x = 310 + 10 + 50 + 10 + 50 + 10;
                // global.playerObject.collidingScrap.y = 600 - 10 - 50;
            }
            break;

        //drop scrap
        case "k":
            if (global.inventoryScrap !== null) {
                //drop scraps above or below character
                console.log("dropping scrap");
                //drop above if middle of character is below middle of canvas
                if (global.playerObject.y + global.playerObject.height / 2 > global.canvas.height / 2) {
                    global.inventoryScrap.y = global.playerObject.y - 100;
                } else {
                    //drop below if middle of character is above middle of canvas
                    global.inventoryScrap.y = global.playerObject.y + global.playerObject.height + 100;
                }
                global.inventoryScrap.x = global.playerObject.x;
                global.inventoryScrap.active = true;
                console.log(global.inventoryScrap);
                global.inventoryScrap = null;
            }
            break;
        //install scrap
        case "l":
            // check if the inventory slot is empty and if the colliding object is spaceship vicinity
            if (global.inventoryScrap !== null && global.playerObject.collidingObjects["SpaceshipVicinity"]) {
                console.log("installing scrap");
                global.installedScraps.push(global.inventoryScrap);
                console.log("Installed Scraps: ", global.installedScraps);
                global.inventoryScrap = null;
                console.log("Inventory Scrap: ", global.inventoryScrap);

                //put in upper row in spaceship
                if (global.installedScraps.length < 4) {
                    for (let i in global.installedScraps) {
                        global.installedScraps[i].x = (global.canvas.width / 2 - 120 / 2 + 10 + (35 * i));
                        global.installedScraps[i].y = 10 + 10;
                    }
                    //put in lower row in spaceship
                } else {
                    for (let i = 3; i < global.installedScraps.length; i++) {
                        console.log(global.installedScraps[i]);
                        global.installedScraps[i].x = (global.canvas.width / 2 - 120 / 2 + 10 + 20 + (35 * (i - 3)));
                        global.installedScraps[i].y = 10 + 70;
                    }
                }
                global.checkScraps();
            }
            break;
        //extract scrap from spaceship (if wrongfully installed)
        case "i":
            // check if there is a scrap to extract and if the colliding object is spaceship vicinity
            if (global.installedScraps.length > 0 && global.playerObject.collidingObjects["SpaceshipVicinity"]) {
                console.log("can extract scrap");
                // console.log("installed scraps length: ", global.installedScraps.length);
                // remove last index and store the removed item
                let removedScrap = global.installedScraps.pop();
                console.log("installed scraps: ", global.installedScraps);
                console.log("removed scrap: ", removedScrap);
                
                //reset the coordinates of the extracted scrap
                //drop above if middle of character is below middle of canvas
                if (global.playerObject.y + global.playerObject.height / 2 > global.canvas.height / 2) {
                    removedScrap.y = global.playerObject.y - 100;
                } else {
                    //drop below if middle of character is above middle of canvas
                    removedScrap.y = global.playerObject.y + global.playerObject.height + 100;
                }
                removedScrap.active = true;
                removedScrap.x = global.playerObject.x;
            } else {
                console.log("no scrap to extract");
            }
            break;


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



// //add movement to pressing WASD
// document.addEventListener("keypress", move);

// document.addEventListener("keypress", manageInventory);

// //stop if player lifts key
// document.addEventListener("keyup", stop);


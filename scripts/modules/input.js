import { global } from "./global.js";

let lastPressedKey;

export function move(event) {
    // Check if the current key is already being handled
    if (event.key === lastPressedKey) {
        return; // exit if the same key is still pressed
    }

    // Movement for player, for WASD
    switch (event.key) {
        case "d":
            global.playerObject.switchCurrentSprites(12, 15);
            global.playerObject.xVelocity = 200;
            global.playerObject.yVelocity = 0;
            lastPressedKey = event.key;
            global.playerObject.lastDirection = "right";
            break;
        case "a":
            global.playerObject.switchCurrentSprites(16, 19);
            global.playerObject.xVelocity = -200;
            global.playerObject.yVelocity = 0;
            lastPressedKey = event.key;
            global.playerObject.lastDirection = "left";
            break;
        case "w":
            global.playerObject.switchCurrentSprites(8, 11);
            global.playerObject.xVelocity = 0;
            global.playerObject.yVelocity = -200;
            lastPressedKey = event.key;
            global.playerObject.lastDirection = "up";
            break;
        case "s":
            global.playerObject.switchCurrentSprites(4, 7);
            global.playerObject.xVelocity = 0;
            global.playerObject.yVelocity = 200;
            lastPressedKey = event.key;
            global.playerObject.lastDirection = "down";
            break;
        // case "v":
        //     // Debugging enemy
        //     console.log("enemy1: ", global.enemy1.width, global.enemy1.height, global.enemy1.x, global.enemy1.y);
        //     console.log("enemy2: ", global.enemy2.width, global.enemy2.height, global.enemy2.x, global.enemy2.y);
        //     console.log("spaceship: ", global.spaceship.width, global.spaceship.height, global.spaceship.x, global.spaceship.y);
        //     break;
    }
}

export function stop(event) {
    if (event.key === lastPressedKey) {
        // Stop movement
        global.playerObject.xVelocity = 0;
        global.playerObject.yVelocity = 0;
        lastPressedKey = null; // Reset lastPressedKey

        switch (global.playerObject.lastDirection) {
            case "down":
                global.playerObject.switchCurrentSprites(0, 0)
                break;
            case "up":
                global.playerObject.switchCurrentSprites(1, 1);
                break;
            case "left":
                global.playerObject.switchCurrentSprites(3, 3);
                break;
            case "right":
                global.playerObject.switchCurrentSprites(2, 2);
                break;
        }
    }
}

//function to either install scraps or drop them   
export function manageInventory(event) {

    switch (event.key) {
        // manage inventory(scrap)
        case "j":
            if (global.inventoryScrap === null && global.playerObject.collidingScrap !== null) {
                // Pick up scrap
                global.inventoryScrap = global.playerObject.collidingScrap;
                console.log("Picked up scrap:", global.inventoryScrap);
                global.playerObject.collidingScrap.active = false;
                global.playerObject.collidingScrap = null;
            } else if (global.inventoryScrap !== null) {
                // Drop scrap
                console.log("Dropping scrap");
                if (global.playerObject.y + global.playerObject.height / 2 > global.canvas.height / 2) {
                    global.inventoryScrap.y = global.playerObject.y - 100; // Drop above
                } else {
                    global.inventoryScrap.y = global.playerObject.y + global.playerObject.height + 100; // Drop below
                }
                global.inventoryScrap.x = global.playerObject.x;
                global.inventoryScrap.active = true;
                console.log("Dropped scrap:", global.inventoryScrap);
                global.inventoryScrap = null;
            }
            break;

        // manage installed scraps
        case "l":
            if (global.inventoryScrap !== null && global.playerObject.collidingObjects["SpaceshipVicinity"]) {
                // Install scrap
                console.log("Installing scrap");
                global.installedScraps.push(global.inventoryScrap);
                console.log("Installed scraps:", global.installedScraps);
                global.inventoryScrap = null;

                // Position the scraps in the spaceship
                if (global.installedScraps.length < 4) {
                    for (let i in global.installedScraps) {
                        global.installedScraps[i].x =
                            global.canvas.width / 2 - 150 / 2 + 10 + 45 * i;
                        global.installedScraps[i].y = 40;
                    }
                } else {
                    for (let i = 3; i < global.installedScraps.length; i++) {
                        global.installedScraps[i].x =
                            global.canvas.width / 2 - 150 / 2 + 10 + 20 + 45 * (i - 3);
                        global.installedScraps[i].y = 10 + 80;
                    }
                }
                global.checkScraps();
            } else if (global.installedScraps.length > 0 && global.playerObject.collidingObjects["SpaceshipVicinity"]) {
                // Extract scrap
                console.log("Extracting scrap");
                let removedScrap = global.installedScraps.pop();
                console.log("Removed scrap:", removedScrap);

                if (global.playerObject.y + global.playerObject.height / 2 > global.canvas.height / 2) {
                    removedScrap.y = global.playerObject.y - 100; // Drop above
                } else {
                    removedScrap.y = global.playerObject.y + global.playerObject.height + 100; // Drop below
                }
                removedScrap.active = true;
                removedScrap.x = global.playerObject.x;
            } else {
                console.log("No scrap to install or extract or not in Vicinity of Spaceship");
            }
            break;
    }

}



// //add movement to pressing WASD ---> this was moved to startGame()
// document.addEventListener("keypress", move);

// document.addEventListener("keypress", manageInventory);

// //stop if player lifts key
// document.addEventListener("keyup", stop);


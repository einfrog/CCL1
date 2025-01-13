import { RoryPlayer } from "../gameObjects/roryPlayer.js";
import { Inventory } from "../gameObjects/inventory.js";
import { global } from "./global.js";
import { Healthbar } from "../gameObjects/healthbar.js";
import { RecipeBox } from "../gameObjects/recipeBox.js";
import { Scrap } from "../gameObjects/scrap.js";


function gameLoop(totalRunningTime) {
    global.deltaTime = totalRunningTime - global.prevTotalRunningTime; // Time in milliseconds between frames
    global.deltaTime /= 1000; // Convert milliseconds to seconds for consistency in calculations
    global.prevTotalRunningTime = totalRunningTime; // Save the current state of "totalRunningTime", so at the next call of gameLoop (== next frame) to calculate deltaTime again for that next frame.
    global.ctx.clearRect(0, 0, global.canvas.width, global.canvas.height); // Completely clear the canvas for the next graphical output 

    // loop in the game loop for game objects;
    for (var i = 0; i < global.allGameObjects.length; i++) {
        // if (global.allGameObjects[i].active == true) {
        global.allGameObjects[i].storePositionOfPreviousFrame();
        global.allGameObjects[i].update();
        global.checkCollisionWithAnyOther(global.allGameObjects[i]);
        //global.playerObject.stayInCanvas();
        global.allGameObjects[i].draw();
        // console.log(global.allGameObjects);
        // }
    }

    // console.log(global.playerObject.x, global.playerObject.y)
    requestAnimationFrame(gameLoop); //keeps gameLoop running
}

function setupGame() {
    global.playerObject = new RoryPlayer(140, 360, 64, 64);
    global.inventory = new Inventory(global.canvas.width / 2 - 180 / 2, 600 - 60 - 10);
    global.healthbar = new Healthbar(10, 10);
    global.recipeBox = new RecipeBox(global.canvas.width - 310, 10);
    global.scraps.push(new Scrap(100, 100, 30, 30, "./img/scraps/placeholder1.png"));
    console.log(global.scraps[0]);
    console.log(global.allGameObjects);

}

setupGame();
requestAnimationFrame(gameLoop);

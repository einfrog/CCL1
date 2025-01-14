import { RoryPlayer } from "../gameObjects/roryPlayer.js";
import { Inventory } from "../gameObjects/inventory.js";
import { global } from "./global.js";
import { Healthbar } from "../gameObjects/healthbar.js";
import { RecipeBox } from "../gameObjects/recipeBox.js";
import { Scrap } from "../gameObjects/scrap.js";
import { DisplayScrap } from "../gameObjects/displayScrap.js";
import { Spaceship } from "../gameObjects/spaceship.js";


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
        if (!(global.allGameObjects[i].name === "DisplayScrap")) {
            // console.log("collision should happen...")
            global.checkCollisionWithAnyOther(global.allGameObjects[i]);
        } else {
            // console.log(global.allGameObjects[i])
        }
        global.allGameObjects[i].draw();

        // }
    }

    // console.log(global.playerObject.x, global.playerObject.y)
    requestAnimationFrame(gameLoop); //keeps gameLoop running
}

function setupGame() {
    //get random coordinates for the scraps
    //provide restriction parameters so scraps don't spawn under ui recipeBox, healthbar or inventory
    global.getRandomCoordinates(100, global.getCanvasBounds().right - 100, 100, global.getCanvasBounds().bottom - 100);
    // test random coordinates
    console.log(global.randomX, global.randomY);
    
    //set variables to make debugging easier
    const recipeBoxX = global.canvas.width - 250;
    const defaultScrapSize = 30;
    const displayScrapSize = 50;
    const margin = 10;

    //instantiate objects
    global.playerObject = new RoryPlayer(140, 360, 64, 64);
    global.inventory = new Inventory(global.canvas.width / 2 - 180 / 2, 600 - 60 - margin, "./img/inventoryPlaceholder.png");
    global.healthbar = new Healthbar(margin, margin, "./img/healthbarPlaceholder.png");
    global.recipeBox = new RecipeBox(recipeBoxX, margin, "./img/recipeBoxPlaceholder.png");
    global.spaceship = new Spaceship(global.canvas.width / 2 - 120 / 2, margin, 120, 120, "./img/spaceshipPlaceholder.png")

    //draw the scraps on random positions on the map
    global.scraps.push(new Scrap(global.randomX - defaultScrapSize, global.randomY - defaultScrapSize, defaultScrapSize, defaultScrapSize, "./img/scraps/placeholder1.png"));
    // draw display scraps into inventory
    for (let i = 0; i < 5; i++) {
        global.displayScraps.push(new DisplayScrap(recipeBoxX + margin + 45 * i, 15, displayScrapSize, displayScrapSize, `./img/scraps/placeholder${i + 1}.png`))
    }
    
    console.log(global.scraps);
    // console.log(global.displayScraps);
    console.log(global.allGameObjects);
    // console.log(global.inventory);
    
}

setupGame();
requestAnimationFrame(gameLoop);

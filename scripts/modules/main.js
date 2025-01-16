import { RoryPlayer } from "../gameObjects/roryPlayer.js";
import { Inventory } from "../gameObjects/inventory.js";
import { global } from "./global.js";
import { Healthbar } from "../gameObjects/healthbar.js";
import { RecipeBox } from "../gameObjects/recipeBox.js";
import { Scrap } from "../gameObjects/scrap.js";
import { DisplayScrap } from "../gameObjects/displayScrap.js";
import { Spaceship } from "../gameObjects/spaceship.js";
import { SpaceShipVicinity } from "../gameObjects/spaceShipVicinity.js";
import { Obstacle } from "../gameObjects/obstacle.js";


function gameLoop(totalRunningTime) {
    global.deltaTime = totalRunningTime - global.prevTotalRunningTime; // Time in milliseconds between frames
    global.deltaTime /= 1000; // Convert milliseconds to seconds for consistency in calculations
    global.prevTotalRunningTime = totalRunningTime; // Save the current state of "totalRunningTime", so at the next call of gameLoop (== next frame) to calculate deltaTime again for that next frame.
    global.ctx.clearRect(0, 0, global.canvas.width, global.canvas.height); // Completely clear the canvas for the next graphical output 

    // loop in the game loop for game objects;
    for (var i = 0; i < global.allGameObjects.length; i++) {
        global.allGameObjects[i].storePositionOfPreviousFrame();
        global.allGameObjects[i].update();
        global.checkCollisionWithAnyOther(global.allGameObjects[i]);
        if (global.allGameObjects[i].isDrawn == true) {
            global.allGameObjects[i].draw();
        }

    }

    // console.log(global.playerObject.x, global.playerObject.y)
    requestAnimationFrame(gameLoop); //keeps gameLoop running
}

function setupGame() {

    let obstacle = new Obstacle(0, 0, 0, 0);
    let map = obstacle.map;

    for (let i = 0; i < map.length; i++) {
        let innerArray = map[i];
        for (let j = 0; j < innerArray.length; j++) {
            if (innerArray[j] == 1) {
                new Obstacle(j * 50, 150 +  i * 50, 50, 50);
            }
            else if (innerArray[j] == 0){

            }
        }
    }

    global.getRecipe();
    console.log("Recipe Scraps: ", global.recipeScrapIDs);

    //set variables to make debugging easier
    const recipeBoxX = global.canvas.width - 250;
    const defaultScrapSize = 30;
    const displayScrapSize = 50;
    const margin = 10;

    //instantiate objects
    global.playerObject = new RoryPlayer(60, 210, 35, 75);
    global.spaceship = new Spaceship(0, 0, 120, 120, "./img/spaceshipPlaceholder.png");
    global.recipeBox = new RecipeBox(recipeBoxX, 0,250, 60, "./img/recipeBoxPlaceholder.png");
    global.inventory = new Inventory(global.canvas.width - 60, 60, 60, 60, "./img/inventoryPlaceholder.png");
    // global.healthbar = new Inventory(0, 120, 800, 480, "./img/spaceshipPlaceholder.png");
    // global.healthbar = new Healthbar(margin, margin, "./img/healthbarPlaceholder.png");
    // global.spaceShipVicinity = new SpaceShipVicinity;

    // draw display scraps into inventory
    for (let i = 0; i < 5; i++) {
        let scrapInstance = global.recipeScrapIDs[i];
        global.displayScraps.push(new DisplayScrap(recipeBoxX + margin / 2 + 45 * i, margin / 2, displayScrapSize, displayScrapSize, `./img/scraps/placeholder${scrapInstance}.png`, scrapInstance))
    }

    //draw the scraps from the recipe
    for (const i of global.recipeScrapIDs){
        console.log("recipe scraps: ", global.recipeScrapIDs);
        console.log("i: ", i);
        global.getRandomCoordinates(100, global.getCanvasBounds().right - defaultScrapSize, 130, 530 - defaultScrapSize);
        global.scraps.push(new Scrap(global.randomX, global.randomY, defaultScrapSize, defaultScrapSize, `./img/scraps/placeholder${i}.png`, i));
        console.log("Scraps: ", global.scraps);

    }

    //draw 5 random scraps
    for (let i = 0; i < 5; i++) {
        //get random coordinates for the scraps
        //provide restriction parameters so scraps don't spawn under ui recipeBox, healthbar or inventory
        //get random coordinates for drwing the scraps
        global.getRandomCoordinates(100, global.getCanvasBounds().right - defaultScrapSize, 130, 530 - defaultScrapSize);
        // test random coordinates
        // console.log(global.randomX, global.randomY);

        //get random scrap instance to draw
        global.getRandomScrapID();
        //test random scrap instance
        console.log("Random Scrap ID: ", global.randomScrapID);

        global.scraps.push(new Scrap(global.randomX, global.randomY, defaultScrapSize, defaultScrapSize, `./img/scraps/placeholder${global.randomScrapID}.png`, global.randomScrapID));
    }


    console.log(global.scraps);
    console.log(global.displayScraps);
    console.log(global.allGameObjects);
    // console.log(global.inventory);
    // console.log(global.spaceShipVicinity);

    

}

setupGame();
requestAnimationFrame(gameLoop);

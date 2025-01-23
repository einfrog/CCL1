import { RoryPlayer } from "../gameObjects/roryPlayer.js";
import { global } from "./global.js";
import { RecipeBox } from "../gameObjects/recipeBox.js";
import { Scrap } from "../gameObjects/scrap.js";
import { DisplayScrap } from "../gameObjects/displayScrap.js";
import { Spaceship } from "../gameObjects/spaceship.js";
import { SpaceShipVicinity } from "../gameObjects/spaceShipVicinity.js";
import { Enemy } from "../gameObjects/enemy.js";
import { Heart } from "../gameObjects/heart.js";
import { move, stop, manageInventory } from "./input.js";


function gameLoop(totalRunningTime) {
    global.deltaTime = totalRunningTime - global.prevTotalRunningTime; // Time in milliseconds between frames
    global.deltaTime /= 1000; // Convert milliseconds to seconds for consistency in calculations

    global.deltaTime = Math.min(global.deltaTime, 0.1); // clamp deltatime and limit to 100ms/frame


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

    // console.log("enemy1: ", global.enemy1);
    // console.log(global.playerObject.nearSpaceship);
    // console.log(global.playerObject.x, global.playerObject.y)
    requestAnimationFrame(gameLoop); //keeps gameLoop running
}

function setupGame() {
    global.prevTotalRunningTime = 0;
    global.allGameObjects = [];
    global.playerObject = {};
    global.inventory = {};
    global.healthbar = {};
    global.recipeBox = {};
    global.displayScraps = [];
    global.scraps = [];
    global.spaceship = {};
    global.inventoryScrap = null;
    global.recipeScrapIDs = [];
    global.installedScraps = [];
    // global.enemy = {};
    global.gameOver = false;
    global.hearts = [];

    global.getRecipe();
    console.log("Recipe Scraps: ", global.recipeScrapIDs);



    //set variables to make debugging easier
    const recipeBoxX = global.canvas.width - 330;
    const defaultScrapSize = 40;
    const displayScrapSize = 60;
    const margin = 10;

    global.spaceship = new Spaceship(global.canvas.width / 2 - 150 / 2, margin, 150, 150, "./img/spaceship.png");


    //draw the scraps from the recipe
    for (const i of global.recipeScrapIDs) {
        //check if id is correct
        // console.log("recipe scraps: ", global.recipeScrapIDs);
        // console.log("i: ", i);
        global.getRandomCoordinates(defaultScrapSize, global.getCanvasBounds().right - defaultScrapSize, 150 + defaultScrapSize, global.getCanvasBounds().bottom - defaultScrapSize);
        global.scraps.push(new Scrap(global.randomX, global.randomY, defaultScrapSize, defaultScrapSize, `./img/scraps/scrap${i}.png`, i));
        //check properties of drawn scraps
        // console.log("Scraps: ", global.scraps);

    }

    //draw 5 random scraps
    for (let i = 0; i < 5; i++) {
        //get random coordinates for the scraps
        //provide restriction parameters so scraps don't spawn under ui recipeBox, healthbar or inventory
        //get random coordinates for drwing the scraps
        global.getRandomCoordinates(defaultScrapSize, global.getCanvasBounds().right - defaultScrapSize, 150 + margin + defaultScrapSize, 530 - defaultScrapSize);
        // test random coordinates
        // console.log(global.randomX, global.randomY);

        //get random scrap instance to draw
        global.getRandomScrapID();
        //test random scrap instance
        // console.log("Random Scrap ID: ", global.randomScrapID);

        global.scraps.push(new Scrap(global.randomX, global.randomY, defaultScrapSize, defaultScrapSize, `./img/scraps/scrap${global.randomScrapID}.png`, global.randomScrapID));
    }



    //instantiate objects
    global.playerObject = new RoryPlayer(100, 360, 100, 115);

    global.enemy1 = new Enemy(400, 300, 100, 100);
    global.enemy2 = new Enemy(800, 300, 100, 100);
    global.enemy3 = new Enemy(800, 500, 100, 100);
    global.enemy4 = new Enemy(400, 500, 100, 100);

    global.recipeBox = new RecipeBox(recipeBoxX, margin, "./img/recipeBox.png");
    global.spaceShipVicinity = new SpaceShipVicinity;



    // draw display scraps into the recipe box
    for (let i = 0; i < 5; i++) {
        let scrapInstance = global.recipeScrapIDs[i];
        global.displayScraps.push(new DisplayScrap(recipeBoxX + margin + 60 * i, 15, displayScrapSize, displayScrapSize, `./img/scraps/scrap${scrapInstance}.png`, scrapInstance))
    }

    //health display
    for (let i = 0; i < global.playerObject.health; i++) {
        global.hearts.push(new Heart(margin + 70 * i, margin, displayScrapSize, displayScrapSize, "./img/heart.png"));
    }




    //check all drawn scraps
    console.log(global.scraps);
    //check display scraps
    console.log(global.displayScraps);
    //check all game objects
    console.log(global.allGameObjects);
    // console.log(global.inventory);
    //check spaceship vicinity
    console.log(global.spaceShipVicinity);

}

function startGame(button) {

    // button.style.display = "none";
    hideAllButtons();
    document.getElementById("displayScreen").style.display = "none";
    global.canvas.style.display = "block";

    //add movement to pressing WASD
    document.addEventListener("keypress", move);

    document.addEventListener("keypress", manageInventory);

    //stop if player lifts key
    document.addEventListener("keyup", stop);

    setupGame();
    requestAnimationFrame(gameLoop);
}

function showGameplay() {
    hideAllButtons();
    global.backButton.style.display = "block";
    global.changeDisplay("./img/gameplay.png");
}

function showStory() {
    hideAllButtons();
    global.backButton.style.display = "block";
    global.changeDisplay("./img/story.png");
}

function showStartScreen() {
    global.backButton.style.display = "none";
    global.changeDisplay("./img/startscreen.png");
    global.playButton.style.display = "block";
    global.gameplayButton.style.display = "block";
    global.storyButton.style.display = "block";
}

// event listeners for all buttons
document.getElementById("playButton").addEventListener("click",
    startGame);

document.getElementById("gameplayButton").addEventListener("click", showGameplay);

document.getElementById("storyButton").addEventListener("click", showStory);

document.getElementById("backButton").addEventListener("click", showStartScreen);

function hideAllButtons() {
    document.querySelectorAll("button").forEach((button) => {
        if (button.id !== "pauseButton" && button.id !== "muteButton") {
            button.style.display = "none";
        }
    });
}

document.addEventListener("visibilitychange", () => {
    if (!document.hidden) {
        // Reset `prevTotalRunningTime` to the current time
        global.prevTotalRunningTime = performance.now();
        global.deltaTime = 0; // Ensure no large jump in deltaTime on resume
    }
});
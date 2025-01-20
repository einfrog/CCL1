const global = {};

global.canvas = document.querySelector("#canvas");
global.ctx = canvas.getContext("2d");
global.displayScreen = document.getElementById("displayScreen");
global.button = document.getElementById("playButton");
global.prevTotalRunningTime = 0;
global.deltaTime = 0;
global.allGameObjects = [];
global.playerObject = {};
global.inventory = {};
global.healthbar = {};
global.recipeBox = {};
global.displayScraps = [];
global.scraps = [];
global.randomX = 0;
global.randomY = 0;
global.spaceship = {};
global.inventoryScrap = null;
global.recipeScrapIDs = [];
global.randomScrapID = 0;
global.installedScraps = [];
// global.enemy = {};
global.gameOver = false;
global.hearts = [];


global.getCanvasBounds = function () {
    let bounds = {
        "left": 0,
        "right": this.canvas.width,
        "top": 0,
        "bottom": this.canvas.height
    }

    return bounds;
}

global.checkCollisionWithAnyOther = function (givenObject) {
    for (let i = 0; i < global.allGameObjects.length; i++) {
        let otherObject = global.allGameObjects[i];
        if (givenObject.active == true && otherObject.active == true) {
            let collisionHappened = this.detectBoxCollision(givenObject, otherObject);
            if (collisionHappened) {
                // if something is colliding with something else, pass what is being collided with (set to true)
                givenObject.collidingObjects[otherObject.name] = true;
                givenObject.reactToCollision(otherObject);
                otherObject.collidingObjects[givenObject.name] = true;
                otherObject.reactToCollision(givenObject);
            } else {
                // if something is not colliding with a specific other Object anymore, set to false (lets you know when something is NOT colliding with something anymore)
                givenObject.collidingObjects[otherObject.name] = false;
                otherObject.collidingObjects[givenObject.name] = false;
            }
        }
    }
}

global.detectBoxCollision = function (gameObject1, gameObject2) {
    let box1 = gameObject1.getBoxBounds();
    let box2 = gameObject2.getBoxBounds();
    if (gameObject1 != gameObject2) {
        if (box1.top <= box2.bottom &&
            box1.left <= box2.right &&
            box1.bottom >= box2.top &&
            box1.right >= box2.left) {
            return true;
        }
    }
    return false;
}

global.getRandomCoordinates = function (minX, maxX, minY, maxY) {

    this.randomX = Math.random() * (maxX - minX) + minX;
    this.randomY = Math.random() * (maxY - minY) + minY;
}

global.getRandomScrapID = function () {
    this.randomScrapID = Math.floor(Math.random() * 5) + 1;
}

//function to be called when scrap is collected
// global.putScrapInInventory = function() {
// }

global.getRecipe = function () {
    this.recipeScrapIDs = Array.from({ length: 5 }, () => Math.floor(Math.random() * 5) + 1);

}

global.checkScraps = function () {

    // strip id from installedScraps[] and put them in an array to be compared to recipescrapIDs[]
    const installedScrapIDs = [];
    for (let i of this.installedScraps) {
        installedScrapIDs.push(i.id)
    }

    console.log("installed ids: ", installedScrapIDs);
    console.log("recipe scraps to be compared to: ", this.recipeScrapIDs);

    if (this.recipeScrapIDs.length == installedScrapIDs.length && this.recipeScrapIDs.every((value, index) => value === installedScrapIDs[index])) {
        console.log("Spaceship completed");
        this.endGameWin();
    }
}

global.changeDisplay = function(targetSource) {
    this.displayScreen.style.display = "block";
    this.displayScreen.src = targetSource;
}

//doesnt work
// global.replayButton = function(button) {
//     global.button.style.display = "block";
// }

// endGame functions
global.endGameLoss = function () {
    for (let i = 0; i < this.allGameObjects.length; i++) {
        console.log("YOU LOST");
        this.allGameObjects[i].isDrawn = false;
        this.allGameObjects[i].active = false;
        global.ctx.clearRect(0, 0, global.canvas.width, global.canvas.height);
        this.changeDisplay("./img/gameoverscreen.png")
        this.button.style.display = "block";
        this.button.textContent = "Try again!";
        
        this.gameOver = true;
    }
}

global.endGameWin = function () {
    for (let i = 0; i < this.allGameObjects.length; i++) {
        console.log("YOU WON");
        this.allGameObjects[i].isDrawn = false;
        this.allGameObjects[i].active = false;
        global.ctx.clearRect(0, 0, global.canvas.width, global.canvas.height);
        this.changeDisplay("./img/gamewonscreen.png");
        this.button.style.display = "block";
        this.button.textContent = "Try again!";
        this.gameOver = true;
    }
}



export { global }
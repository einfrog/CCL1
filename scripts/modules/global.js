const global = {};

global.canvas = document.querySelector("#canvas");
global.ctx = canvas.getContext("2d");
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
global.inventoryScrap = 0;
global.recipeScraps = [];
global.randomScrapInstance = 0;
global.installedScraps = [];

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
                givenObject.reactToCollision(otherObject);
                otherObject.reactToCollision(givenObject);
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

global.getRandomCoordinates = function(minX, maxX, minY, maxY) {

    this.randomX = Math.random() * maxX + minX;
    this.randomY = Math.random() * maxY + minY;
}

global.getRandomScrapInstance = function(){
    this.randomScrapInstance = Math.floor(Math.random() * 5) + 1;
}

//function to be called when scrap is collected
// global.putScrapInInventory = function() {
// }

global.getRecipe = function() {
    this.recipeScraps = Array.from({ length: 5 }, () => Math.floor(Math.random() * 5) + 1);
   
}

export { global }
import { global } from "../modules/global.js";
import { BaseGameObject } from "./baseGameObject.js";
import { Spaceship } from "./spaceship.js";

class SpaceShipVicinity extends BaseGameObject {
    active = true;
    isDrawn = false;
    name = "SpaceshipVicinity";
    x = global.spaceship.x - 25;
    y = global.spaceship.y - 25;
    width = global.spaceship.width + 50;
    height = global.spaceship.height + 50;

}

export { SpaceShipVicinity }

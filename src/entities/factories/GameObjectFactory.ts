import {Enemy} from "../Enemy";
import {Vector} from "../base/Vector";
import {Field} from "../../Field";

export class GameObjectFactory {
    static sprite: HTMLImageElement;

    static getRock(x: number, y: number) {
    }

    static createEnemy(x: number, y: number, field: Field): Enemy {
        return new Enemy(new Vector(x, y), 10, field, GameObjectFactory.sprite);
    }
}
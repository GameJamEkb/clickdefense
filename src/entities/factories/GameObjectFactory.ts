import {EmptyCell} from "../EmptyCell";
import {Rectangle} from "../base/Rectangle";
import {Cell} from "../base/Cell";
import {getPositionByCell} from "../../utils/positions";
import {Field} from "../../Field";
import {Rock} from "../Rock";
import {Enemy} from "../Enemy";
import {Vector} from "../base/Vector";
import {Tower} from "../Tower";

export class GameObjectFactory {
    static sprite: HTMLImageElement;
    static createRock(x: number, y: number, field: Field) {
        return new Rock(
            new Rectangle(32, 32),
            field,
            false,
            getPositionByCell(new Cell(x, y), field)
        )
    }

    static createEmptyCell(x: number, y: number, field: Field): EmptyCell {
        return new EmptyCell(
            new Rectangle(30, 30),
            field,
            true,
            getPositionByCell(new Cell(x, y), field)
        )
    }

    static createEnemy(x: number, y: number, field: Field): Enemy {
        return new Enemy(
            new Rectangle(10, 30),
            field, true,
            new Vector(x, y), 100, GameObjectFactory.sprite
        )
        // return new Enemy(new Vector(x, y), 10, field, GameObjectFactory.sprite);
    }
    static createTower(x: number, y: number, field: Field): Tower {
        return new Tower(
            new Rectangle(10, 30),
            field, true,
            new Vector(x, y), 100
        )
        // return new Enemy(new Vector(x, y), 10, field, GameObjectFactory.sprite);
    }

}
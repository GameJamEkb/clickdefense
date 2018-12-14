import {EmptyCell} from "../EmptyCell";
import {Rectangle} from "../base/Rectangle";
import {Cell} from "../base/Cell";
import {getPositionByCell} from "../../utils/positions";
import {Field} from "../../Field";
import {Rock} from "../Rock";
import {Enemy} from "../Enemy";
import {Vector} from "../base/Vector";
import {ITower} from "../interfaces/ITower";
import {BaseTower} from "../towers/BaseTower";
import Base = Mocha.reporters.Base;

export class GameObjectFactory {
    static sprite: HTMLImageElement;
    static createRock(cell: Cell, field: Field) {
        return new Rock(
            new Rectangle(32, 32),
            field,
            false,
            getPositionByCell(cell, field),
            100,
            100
        )
    }

    static createEmptyCell(cell: Cell, field: Field): EmptyCell {
        return new EmptyCell(
            new Rectangle(30, 30),
            field,
            true,
            getPositionByCell(cell, field),
            100,
            100
        )
    }

    static createEnemy(vector: Vector, field: Field): Enemy {
        return new Enemy(
            new Rectangle(20, 10),
            field,
            true,
            vector,
            100,
            100,
            GameObjectFactory.sprite
        )
    }
    static createTower(cell: Cell, field: Field): BaseTower {
        return new BaseTower(
            new Rectangle(10, 30),
            field,
            false,
            getPositionByCell(cell, field),
            100,
            100,
            0,
            4,
            50,
            5
        )
    }

}
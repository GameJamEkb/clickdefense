import {EmptyCell} from "../gameObjects/EmptyCell";
import {Rectangle} from "../base/Rectangle";
import {Cell} from "../base/Cell";
import {getPositionByCell} from "../../utils/positions";
import {Field} from "../../Field";
import {Rock} from "../gameObjects/Rock";
import {Enemy} from "../gameObjects/Enemy";
import {Vector} from "../base/Vector";
import {BaseTower} from "../towers/BaseTower";
import Base = Mocha.reporters.Base;
import {Spawner} from "../gameObjects/Spawner";
import {SplashTower} from "../towers/SplashTower";

export class GameObjectFactory {
    static sprite: HTMLImageElement;
    static createRock(cell: Cell, field: Field) {
        return new Rock(
            new Rectangle(32, 32),
            field,
            false,
            getPositionByCell(cell, field),
            100,
            100,
            false
        )
    }

    static createEmptyCell(cell: Cell, field: Field): EmptyCell {
        return new EmptyCell(
            new Rectangle(30, 30),
            field,
            true,
            getPositionByCell(cell, field),
            100,
            100,
            false
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
            GameObjectFactory.sprite,
            false
        )
    }
    static createBaseTower(cell: Cell, field: Field): BaseTower {
        return new BaseTower(
            new Rectangle(10, 30),
            field,
            false,
            getPositionByCell(cell, field),
            100,
            100,
            1,
            40,
            50,
            1,
            true
        )
    }

    static createSplashTower(cell: Cell, field: Field): BaseTower {
        return new SplashTower(
            new Rectangle(10, 30),
            field,
            false,
            getPositionByCell(cell, field),
            100,
            100,
            0.4,
            110,
            50,
            0.4,
            true
        )
    }

    static createSpawner(cell: Cell, field: Field): Spawner {
        return new Spawner(
            new Rectangle(10, 30),
            field,
            true,
            getPositionByCell(cell, field),
            100,
            100,
            0.01,
            0.01,
            true
        )
    }

}
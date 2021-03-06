import {EmptyCell} from "../gameObjects/EmptyCell";
import {Rectangle} from "../base/Rectangle";
import {Cell} from "../base/Cell";
import {getCellByPostion, getPositionByCell} from "../../utils/positions";
import {Field} from "../../Field";
import {Rock} from "../gameObjects/Rock";
import {Enemy} from "../gameObjects/Enemy";
import {Vector} from "../base/Vector";
import {BaseTower} from "../towers/BaseTower";
import Base = Mocha.reporters.Base;
import {EnemiesEnum, Spawner} from "../gameObjects/Spawner";
import {SplashTower} from "../towers/SplashTower";
import {TrapTower} from "../towers/TrapTower";
import {Animation} from "../../Animation";
import {randomInt} from "../../utils/nums";
import {Circle} from "../base/Circle";
import {Gold} from "../gameObjects/Gold";
import {GameConfig} from "../../constants/GameConfig";
import {SmartSpawner} from "../gameObjects/SmartSpawner";
import {Player} from "../../Player";

export class GameObjectsFactory {
    static createRock(cell: Cell, field: Field) {
        return new Rock(
            new Rectangle(32, 32, 0, 0),
            field,
            false,
            getPositionByCell(cell, field),
            100,
            100,
            false,
            GameConfig.sprite
        )
    }

    static createGold(cell: Cell, field: Field, player: Player) {
        return new Gold(
            new Circle(16, 0, 0),
            field,
            true,
            getPositionByCell(cell, field),
            100,
            100,
            false,
            player
        )
    }

    static createEmptyCell(cell: Cell, field: Field): EmptyCell {
        return new EmptyCell(
            new Rectangle(30, 30, 0, 0),
            field,
            true,
            getPositionByCell(cell, field),
            100,
            100,
            false,
            GameConfig.sprite
        )
    }

    static createSpawner(cell: Cell, field: Field, enemiesType: EnemiesEnum): Spawner {
        return new Spawner(
            new Rectangle(10, 30, 0, 0),
            field,
            true,
            getPositionByCell(cell, field),
            100,
            100,
            1,
            1,
            true,
            enemiesType
        )
    }

    static createSmartSpawner(cell: Cell, field: Field): SmartSpawner {
        return new SmartSpawner(
            new Rectangle(10, 30, 0, 0),
            field,
            true,
            getPositionByCell(cell, field),
            100,
            100,
            1,
            1,
            true,
        )
    }


}
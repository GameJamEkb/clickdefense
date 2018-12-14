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
import {Spawner} from "../gameObjects/Spawner";
import {SplashTower} from "../towers/SplashTower";
import {TrapTower} from "../towers/TrapTower";
import {Animation} from "../../Animation";
import {randomInt} from "../../utils/nums";
import {Circle} from "../base/Circle";
import {Gold} from "../gameObjects/Gold";
import {GameConfig} from "../../constants/GameConfig";

export class TowerFactory {
    static createBaseTower(cell: Cell, field: Field): BaseTower {
        return new BaseTower(
            new Rectangle(32, 32, 0, 0),
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
            new Rectangle(32, 32, 0, 0),
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

    static createTrapTower(cell: Cell, field: Field): BaseTower {
        return new TrapTower(
            new Rectangle(32, 32, 0, 0),
            field,
            true,
            getPositionByCell(cell, field),
            5,
            5,
            1,
            110,
            10,
            1,
            true
        )
    }
}
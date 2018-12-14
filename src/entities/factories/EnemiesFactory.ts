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

export class EnemiesFactory {
    static createOrk(vector: Vector, field: Field): Enemy {
        return new Enemy(
            new Rectangle(20, 30, 0, -10),
            field,
            true,
            vector,
            100,
            100,
            GameConfig.sprite,
            false,
            new Animation(368 * 2, 204 * 2, 32, 0, 0.2, 3, randomInt(0, 4)),
            field.goldPosition,
            10,
            false,
            getCellByPostion(vector, field),
            2
        )
    }
}
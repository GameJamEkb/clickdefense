import {Rectangle} from "../base/Rectangle";
import {getCellByPostion, getPositionByCell} from "../../utils/positions";
import {Field} from "../../Field";
import {Enemy} from "../gameObjects/Enemy";
import {Vector} from "../base/Vector";
import {AnimationsFactory} from "./AnimationsFactory";

export class EnemiesFactory {
    static createOrk(vector: Vector, field: Field): Enemy {
        return new Enemy(
            new Rectangle(20, 30, 0, -10),
            field,
            true,
            vector,
            100,
            100,
            false,
            AnimationsFactory.createOrkAnimation(),
            field.goldPosition(),
            10,
            false,
            getCellByPostion(vector, field),
            1.7,
            1
        )
    }

    static createSkelet(vector: Vector, field: Field): Enemy {
        return new Enemy(
            new Rectangle(20, 30, -3, -18),
            field,
            true,
            vector,
            50,
            50,
            false,
            AnimationsFactory.createSkeletAnimation(),
            field.goldPosition(),
            5,
            false,
            getCellByPostion(vector, field),
            2,
            1
        )
    }

    static createSlime(vector: Vector, field: Field): Enemy {
        return new Enemy(
            new Rectangle(28, 26, -2, -16),
            field,
            true,
            vector,
            250,
            250,
            false,
            AnimationsFactory.createSlimeAnimation(),
            field.goldPosition(),
            20,
            false,
            getCellByPostion(vector, field),
            1.3,
            0.8
        )
    }

    static createBlueStick(vector: Vector, field: Field): Enemy {
        return new Enemy(
            new Rectangle(20, 30, 0, -18),
            field,
            true,
            vector,
            40,
            40,
            false,
            AnimationsFactory.createBlueStickAnimation(),
            field.goldPosition(),
            7,
            false,
            getCellByPostion(vector, field),
            3,
            1.3
        )
    }
}
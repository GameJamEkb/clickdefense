import {Animation} from "../../Animation";
import {randomInt} from "../../utils/nums";
import {GameConfig} from "../../constants/GameConfig";

export class AnimationsFactory {
    static createOrkAnimation(): Animation {
        return new Animation(
            368 * 2,
            204 * 2,
            GameConfig.sprite,
            32,
            0,
            0.2,
            4,
            randomInt(0, 4)
        )
    }

    static createSkeletAnimation(): Animation {
        return new Animation(
            432 * 2,
            80 * 2,
            GameConfig.sprite,
            32,
            0,
            0.2,
            3,
            randomInt(0, 4)
        )
    }

    static createSlimeAnimation(): Animation {
        return new Animation(
            432 * 2,
            112 * 2,
            GameConfig.sprite,
            32,
            0,
            0.2,
            3,
            randomInt(0, 4)
        )
    }

    static createBlueStickAnimation(): Animation {
        return new Animation(
            432 * 2,
            144 * 2,
            GameConfig.sprite,
            32,
            0,
            0.2,
            3,
            randomInt(0, 4)
        );
    }

}
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
import {FastSplashTower} from "../towers/FastSplashTower";
import {MineTower} from "../towers/MineTower";
import {PoisonTower} from "../towers/PoisonTower";
import {SlowingTower} from "../towers/SlowingTower";

export class TowerFactory {
    static createBaseTower(cell: Cell, field: Field): BaseTower {
        return new BaseTower(
            new Rectangle(32, 32, 0, 0),
            field,
            false,
            getPositionByCell(cell, field),
            100,
            100,
            2,
            50,
            3 * 32 - 16,
            2,
            true,
            250
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
            5,
            200,
            1 * 32 - 16,
            5,
            true,
            100
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
            4,
            35,
            3 * 32 - 16,
            4,
            true,
            250
        )
    }

    static createFastSplashTower(cell: Cell, field: Field): BaseTower {
        return new FastSplashTower(
            new Rectangle(32, 32, 0, 0),
            field,
            false,
            getPositionByCell(cell, field),
            100,
            100,
            0.5,
            5,
            2 * 32 - 16,
            0.5,
            true,
            250
        )
    }

    static createMineTower(cell: Cell, field: Field): BaseTower {
        return new MineTower(
            new Rectangle(32, 32, 0, 0),
            field,
            true,
            getPositionByCell(cell, field),
            3,
            3,
            3,
            250,
            32,
            10,
            true,
            125
        )
    }

    static createPoisonTower(cell: Cell, field: Field): BaseTower {
        return new PoisonTower(
            new Rectangle(32, 32, 0, 0),
            field,
            true,
            getPositionByCell(cell, field),
            100,
            100,
            3,
            3,
            2 * 32 - 16,
            3,
            true,
            250
        )
    }

    static createSlowingTower(cell: Cell, field: Field): BaseTower {
        return new SlowingTower(
            new Rectangle(32, 32, 0, 0),
            field,
            true,
            getPositionByCell(cell, field),
            100,
            100,
            3,
            0.7,
            2 * 32 - 16,
            3,
            true,
            175
        )
    }


    static createTowerById(id: string, cell: Cell, field: Field): BaseTower {
        switch (id) {
            case 'Base': return this.createBaseTower(cell, field);
            case 'FastSplashTower': return this.createFastSplashTower(cell, field);
            case 'MineTower': return this.createMineTower(cell, field);
            case 'PoisonTower': return this.createPoisonTower(cell, field);
            case 'SlowingTower': return this.createSlowingTower(cell, field);
            case 'SplashTower': return this.createSplashTower(cell, field);
            case 'TrapTower': return this.createTrapTower(cell, field);
            default: return this.createBaseTower(cell, field);
        }
    }
}
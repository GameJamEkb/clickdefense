import {IGameObject} from "../interfaces/IGameObject";
import {Vector} from "../base/Vector";
import {Field} from "../../Field";
import {ICollider} from "../interfaces/ICollider";
import {IReloader} from "../interfaces/IReloader";
import {fillCircle} from "../../utils/render";
import {TowerFactory} from "../factories/TowerFactory";
import {EnemiesFactory} from "../factories/EnemiesFactory";
import {GameConfig} from "../../constants/GameConfig";

export class Spawner implements IGameObject, IReloader {
    constructor(public collider: ICollider,
                public field: Field,
                public passability: boolean,
                public position: Vector,
                public hp: number,
                public maxHp: number,
                public timeout: number,
                public reloadTime: number,
                public reloadBar: boolean)
    { }

    onClick(): void {
    }

    onOver(): void {
    }

    render(ctx: CanvasRenderingContext2D): void {
        ctx.drawImage(GameConfig.sprite, 32 * 2, 64 * 2, 32, 32, this.position.x - 16, this.position.y - 16, 32, 32)

        fillCircle(ctx, this.position.x, this.position.y, 15, "green");
    }

    spawnEnemy() {
        this.field.addEnemy(EnemiesFactory.createOrk(this.position, this.field));
    }

    update(elapsed: number): void {
        this.timeout -= elapsed;
        if (this.isRealoded()) {
            this.startReload();
            this.spawnEnemy();
        }
    }

    isRealoded(): boolean {
        return this.timeout <= 0;
    }

    startReload(): void {
        this.timeout = this.reloadTime;
    }
}
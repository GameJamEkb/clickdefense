import {IGameObject} from "../interfaces/IGameObject";
import {Vector} from "../base/Vector";
import {Field} from "../../Field";
import {ICollider} from "../interfaces/ICollider";
import {IReloader} from "../interfaces/IReloader";
import {fillCircle} from "../../utils/render";
import {GameObjectFactory} from "../factories/GameObjectFactory";

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

    render(ctx: CanvasRenderingContext2D): void {
        fillCircle(ctx, this.position.x, this.position.y, 15, "green");
    }

    spawnEnemy() {
        this.field.addEnemy(GameObjectFactory.createEnemy(this.position, this.field));
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
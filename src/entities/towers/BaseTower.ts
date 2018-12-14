import {Vector} from "../base/Vector";
import {Field} from "../../Field"
import {drawCircle} from "../../utils/render";
import {ITower} from "../interfaces/ITower";
import {IReloader} from "../interfaces/IReloader";
import {IGameObject} from "../interfaces/IGameObject";
import {ICollider} from "../interfaces/ICollider";

export class BaseTower implements IGameObject, ITower, IReloader {

    constructor(public collider: ICollider,
                public field: Field,
                public passability: boolean,
                public position: Vector,
                public hp: number,
                public maxHp: number,
                public timeout: number,
                public attackPower: number,
                public weaponRadius: number,
                public reloadTime: number,
                public reloadBar: boolean)
    { }

    render(ctx: CanvasRenderingContext2D): void {
        drawCircle(ctx, this.position.x, this.position.y, 15);
    }

    attackEnemy(): void {
        var enemies = this.field.getEnemiesFromRadius(this.position, this.weaponRadius)
        enemies.forEach(enemy => {
            enemy.gotHit(this.attackPower)
        })
    }

    onClick(): void {
        this.attackEnemy()
    }

    update(elapsed: number): void {
        this.attackEnemy()
    }

    attack(): boolean {
        return false;
    }

    isRealoded(): boolean {
        return false;
    }

    startReload(): void {
        this.timeout = this.reloadTime;
    }
}
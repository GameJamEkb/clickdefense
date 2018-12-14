import {Vector} from "../base/Vector";
import {Field} from "../../Field"
import {drawCircle} from "../../utils/render";
import {ITower} from "../interfaces/ITower";
import {IReloader} from "../interfaces/IReloader";
import {IGameObject} from "../interfaces/IGameObject";
import {ICollider} from "../interfaces/ICollider";

export class BaseTower implements IGameObject, ITower, IReloader {
    // static BaseHp = 100;
    // static BaseReloadTime = 0.3;

    WeaponRadius = 50;
    AttackPower = 4;
    // timeout: number;
    // reloadTime: number;

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

    attackEnemy(attackPower: number): void {
        var Reload = this.isRealoded()
        if (Reload) {
            var enemies = this.field.getEnemiesFromRadius(this.position, this.WeaponRadius)
            enemies.forEach(enemy => {
                enemy.gotHit(attackPower)
            });
            this.startReload()
        };
    }

    onClick(): void {
        this.attackEnemy(this.AttackPower)
    }

    update(elapsed: number): void {
        this.timeout -= elapsed;
        console.log(this.timeout)
        this.attackEnemy(this.AttackPower)

    }

    attack(): boolean {
        return false;
    }

    isRealoded(): boolean {
        return this.timeout <= 0;
    }

    startReload(): void {
        this.timeout = this.reloadTime;
    }
}
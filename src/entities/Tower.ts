import {IGameObject} from "./interfaces/IGameObject";
import {Vector} from "./base/Vector";
import {Field} from "../Field"
import {drawCircle} from "../utils/render";
import {ICollider} from "./interfaces/ICollider";

export class Tower implements IGameObject {
    private static BaseHp = 100;
    WeaponRadius = 50;
    AttackPower = 4;

    constructor(public collider: ICollider,
                public field: Field,
                public passability: boolean,
                public position: Vector,
                public hp: number)
    {
        this.hp = Tower.BaseHp;
    }

    render(ctx: CanvasRenderingContext2D): void {
        drawCircle(ctx, this.position.x, this.position.y, 15);
    }

    attackEnemy(): void {
        var enemies = this.field.getEnemiesFromRadius(this.position, this.AttackPower)
        enemies.forEach(enemy => {
            enemy.gotHit(this.AttackPower)
        })
    }

    onClick(): void {
        this.attackEnemy()
    }

    update(elapsed: number): void {
        this.attackEnemy()
    }
}
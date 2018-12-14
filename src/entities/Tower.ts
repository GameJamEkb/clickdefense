import {GameObject} from "./base/GameObject";
import {Vector} from "./base/Vector";
import {Field} from "../Field"
import {Ellipse} from "./base/Ellipse";

export class Tower extends GameObject {
    private static BaseHp = 100;
    WeaponRadius = 50;
    AttackPower = 4;


    constructor(x: number, y: number, field: Field) {
        super(new Vector(x, y), Tower.BaseHp, false, field, new Ellipse(5, 5));
    }

    render(obj: GameObject, ctx: CanvasRenderingContext2D): void {
        drawCircle(ctx, obj.position.x, obj.position.y, 5);
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
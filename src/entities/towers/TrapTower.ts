import {fillCircle, fillRectangle} from "../../utils/render";
import {Tower} from "../gameObjects/Tower";
import {IReloader} from "../interfaces/IReloader";
import {IGameObject} from "../interfaces/IGameObject";

export class TrapTower extends Tower implements IGameObject, IReloader {

    tryAttack(): boolean {
        if (this.isRealoded() && this.hp > 0) {
            var enemies = this.field.getEnemiesFromRadius(this.position, this.weaponRadius)
            if (enemies.length) {
                enemies.forEach(
                    enemy => enemy.gotHit(this.attackPower)
                );
                this.hp--
                this.startReload();
                return true;
            }
        }
        return false;
    }

    render(ctx: CanvasRenderingContext2D): void {
        // fillCircle(ctx, this.position.x, this.position.y, 10, "brown");
            fillRectangle(ctx, this.position.x, this.position.y, 15, 15, "brown")
    }

    onClick(): void {
        this.tryAttack()
    }

    onOver(): void {
    }

    update(elapsed: number): void {
        this.timeout -= elapsed;
        this.tryAttack();
        if (this.hp <= 0) {
            this.field.killTrap(this.position)
        }
    }

}
import {drawRectangleCollider, fillCircle} from "../../utils/render";
import {Tower} from "../gameObjects/Tower";
import {IReloader} from "../interfaces/IReloader";
import {IGameObject} from "../interfaces/IGameObject";
import {Rectangle} from "../base/Rectangle";
import {GameConfig} from "../../constants/GameConfig";

export class SplashTower extends Tower implements IGameObject, IReloader {

    tryAttack(): boolean {
        if (this.isRealoded()) {
            var enemies = this.field.getEnemiesFromRadius(this.position, this.weaponRadius)
            if (enemies.length) {
                enemies.forEach(
                    enemy => enemy.gotHit(this.attackPower)
                );
                this.startReload();
                return true;
            }
        }
        return false;
    }

    render(ctx: CanvasRenderingContext2D): void {
        ctx.drawImage(GameConfig.sprite, 32 * 2, 64 * 2, 32, 32, this.position.x - 16, this.position.y - 16, 32, 32)

        fillCircle(ctx, this.position.x, this.position.y, 15, "green");
    }

    drawCollider(ctx: CanvasRenderingContext2D): void {
        drawRectangleCollider(ctx, this.position, this.collider as Rectangle);
    }

    onClick(): void {
        this.tryAttack()
    }
    onOver(): void {
        super.onOver();
    }

}
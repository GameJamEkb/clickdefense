import {drawCircle} from "../../utils/render";
import {Tower} from "../gameObjects/Tower";
import {IReloader} from "../interfaces/IReloader";
import {IGameObject} from "../interfaces/IGameObject";

export class BaseTower extends Tower implements IGameObject, IReloader {

    tryAttack(): boolean {
        if (this.isRealoded()) {
            var enemies = this.field.getEnemiesFromRadius(this.position, this.weaponRadius)
            if (enemies.length) {
                enemies[0].gotHit(this.attackPower);
                this.startReload();
                return true;
            }
        }
        return false;
    }

    render(ctx: CanvasRenderingContext2D): void {
        drawCircle(ctx, this.position.x, this.position.y, 15);
    }

    onClick(): void {
        this.tryAttack()
    }

}
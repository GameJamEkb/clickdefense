import {IGameObject} from "../interfaces/IGameObject";
import {Vector} from "../base/Vector";
import {Field} from "../../Field";
import {ICollider} from "../interfaces/ICollider";
import {fillCircle} from "../../utils/render";
import {randomInt} from "../../utils/nums";
import {GameConfig} from "../../constants/GameConfig";

export class Gold implements IGameObject {
    deltas: Array<Vector> = []

    constructor(public collider: ICollider,
                public field: Field,
                public passability: boolean,
                public position: Vector,
                public hp: number,
                public maxHp: number,
                public reloadBar: boolean)
    {
        for (let line = 0; line < 8; line++) {
            for (let m = line; m < 8; m++) {
                let dx = randomInt(-14 + line, 14 - line);
                let dy = randomInt(-line * 3 + 4, -line * 3 + 6);
                this.deltas.push(new Vector(dx, dy));
            }

        }

    }

    onClick(): void {
    }
    onOver(): void {
    }

    render(ctx: CanvasRenderingContext2D): void {
        ctx.drawImage(GameConfig.sprite, 32 * 2, 64 * 2, 32, 32, this.position.x - 16, this.position.y - 16, 32, 32)
        this.deltas.forEach(
            delta => fillCircle(ctx, this.position.x + delta.x, this.position.y + delta.y, 5, "yellow", true)

        )
    }

    update(elapsed: number): void {
    }
}
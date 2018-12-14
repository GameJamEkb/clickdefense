import {IGameObject} from "../interfaces/IGameObject";
import {Vector} from "../base/Vector";
import {Field} from "../../Field";
import {ICollider} from "../interfaces/ICollider";

export class Rock implements IGameObject {
    constructor(public collider: ICollider,
                public field: Field,
                public passability: boolean,
                public position: Vector,
                public hp: number,
                public maxHp: number,
                public reloadBar: boolean,
                public sprite: HTMLImageElement) {
    }

    onClick(): void {
    }

    render(ctx: CanvasRenderingContext2D): void {
        ctx.drawImage(this.sprite, 64, 320, 32, 32, this.position.x - 16, this.position.y - 16, 32, 32)
        // drawCircle(ctx, this.position.x + 5, this.position.y + 5, 5);


    }

    update(elapsed: number): void {
    }
}
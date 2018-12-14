import {IGameObject} from "../interfaces/IGameObject";
import {Vector} from "../base/Vector";
import {Field} from "../../Field";
import {ICollider} from "../interfaces/ICollider";
import {randomInt} from "../../utils/nums";

export class EmptyCell implements IGameObject {
    private readonly hasScull: boolean = false;
    private readonly hasBox: boolean = false;


    constructor(public collider: ICollider,
                public field: Field,
                public passability: boolean,
                public position: Vector,
                public hp: number,
                public maxHp: number,
                public reloadBar: boolean,
                public sprite: HTMLImageElement) {

        if (randomInt(0, 100) <= 1) {
            this.hasScull = true;
        }

        if (randomInt(0, 100) <= 3) {
            this.passability = false;
            this.hasBox = true;
        }
    }

    onClick(): void {
    }

    render(ctx: CanvasRenderingContext2D): void {
        ctx.drawImage(this.sprite, 32 * 2, 64 * 2, 32, 32, this.position.x - 16, this.position.y - 16, 32, 32)
        if (this.hasScull) {
            ctx.drawImage(this.sprite, 448, 448, 32, 32, this.position.x - 16, this.position.y - 16, 32, 32)
        }

        if (this.hasBox) {
            ctx.drawImage(this.sprite, 224 * 2, 202 * 2, 32, 22 * 2, this.position.x - 14, this.position.y - 26, 36, 22 * 2)
        }
    }

    update(elapsed: number): void {
    }
}
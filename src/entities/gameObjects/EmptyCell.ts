import {IGameObject} from "../interfaces/IGameObject";
import {Vector} from "../base/Vector";
import {Field} from "../../Field";
import {ICollider} from "../interfaces/ICollider";

export class EmptyCell implements IGameObject {

    constructor(public collider: ICollider,
                public field: Field,
                public passability: boolean,
                public position: Vector,
                public hp: number,
                public maxHp: number,
                public reloadBar: boolean)
    { }

    onClick(): void {
    }

    onOver(): void {

    }

    render(ctx: CanvasRenderingContext2D): void {
        const size = this.field.cellSize -1;
        ctx.beginPath();
        ctx.fillStyle = 'lightgray';
        ctx.fillRect(this.position.x  - size /2, this.position.y - size / 2,  size, size);
        ctx.closePath();
    }

    update(elapsed: number): void {
    }
}
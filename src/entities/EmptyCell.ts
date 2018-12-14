import {IGameObject} from "./interfaces/IGameObject";
import {Vector} from "./base/Vector";
import {Field} from "../Field";
import {ICollider} from "./interfaces/ICollider";

export class EmptyCell implements IGameObject {
    private static BaseHp = 100;

    hp: Number;

    constructor(public collider: ICollider,
                public field: Field,
                public passability: boolean,
                public position: Vector)
    {
        this.hp = EmptyCell.BaseHp;
    }

    onClick(): void {
    }

    render(ctx: CanvasRenderingContext2D): void {
        const size = this.field.cellSize - 6;
        ctx.beginPath();
        ctx.fillStyle = 'lightgray';
        ctx.fillRect(this.position.x + 3, this.position.y + 3,  size, size);
        ctx.closePath();
    }

    update(elapsed: number): void {
    }






}
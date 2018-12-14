import {GameObject} from "./base/GameObject";
import {Vector} from "./base/Vector";
import {Ellipse} from "./base/Ellipse";
import {Field} from "../Field";

export class EmptyCell extends GameObject {
    private static BaseHp = 100;

    constructor(x: number, y: number, field: Field) {
        super(new Vector(x * field.cellSize , y * field.cellSize), EmptyCell.BaseHp, true, field, new Ellipse(5, 5));
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
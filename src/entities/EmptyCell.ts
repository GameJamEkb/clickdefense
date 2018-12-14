import {GameObject} from "./base/GameObject";
import {Vector} from "./base/Vector";
import {Ellipse} from "./base/Ellipse";
import {Field} from "../Field";

export class EmptyCell extends GameObject {
    private static BaseHp = 100;

    constructor(x: number, y: number, field: Field) {
        super(new Vector(x, y), EmptyCell.BaseHp, false, field, new Ellipse(5, 5));
    }

    onClick(): void {
    }

    render(ctx: CanvasRenderingContext2D): void {

    }

    update(elapsed: number): void {
    }
}
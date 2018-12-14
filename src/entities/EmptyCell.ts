import {GameObject} from "./base/GameObject";
import {Vector} from "./base/Vector";

export class EmptyCell extends GameObject {
    private static BaseHp = 100;

    constructor(x: number, y: number) {
        super(new Vector(x, y), EmptyCell.BaseHp, false);
    }

    onClick(): void {
    }

    render(ctx: CanvasRenderingContext2D): void {

    }

    update(elapsed: number): void {
    }
}
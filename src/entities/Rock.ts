import {GameObject} from "./base/GameObject";
import {Vector} from "./base/Vector";
import {drawCircle} from "../utils/Render";
import {Ellipse} from "./base/Ellipse";
import {Field} from "../Field";

export class Rock extends GameObject {
    private static BaseHp = 100;

    constructor(x: number, y: number, field: Field) {
        super(new Vector(x, y), Rock.BaseHp, false, field, new Ellipse(5, 5));
    }

    onClick(): void {
    }

    render(ctx: CanvasRenderingContext2D): void {
        drawCircle(ctx, this.position.x + 5, this.position.y + 5, 5);
    }

    update(elapsed: number): void {
    }
}
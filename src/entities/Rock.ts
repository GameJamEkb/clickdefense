import {GameObject} from "./base/GameObject";
import {Vector} from "./base/Vector";
import {drawCircle} from "../utils/Render";

export class Rock extends GameObject {
    private static BaseHp = 100;

    constructor(x: number, y: number) {
        super(new Vector(x, y), Rock.BaseHp, false);
    }

    onClick(): void {
    }

    render(ctx: CanvasRenderingContext2D): void {
        drawCircle(ctx, this.position.x, this.position.y, 5);
    }

    update(elapsed: number): void {
    }
}
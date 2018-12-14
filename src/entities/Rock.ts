import {GameObject} from "./base/GameObject";
import {Vector} from "./base/Vector";

export class Rock extends GameObject {
    private static BaseHp = 100;

    constructor(x: number, y: number) {
        super(new Vector(x, y), Rock.BaseHp, false);
    }

    onClick(): void {
    }

    render(obj: GameObject, ctx: CanvasRenderingContext2D): void {
        drawCircle(ctx, obj.position.x, obj.position.y, 5);
    }
}
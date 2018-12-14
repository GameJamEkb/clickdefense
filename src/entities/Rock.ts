import {IGameObject} from "./interfaces/IGameObject";
import {Vector} from "./base/Vector";
import {drawCircle} from "../utils/render";
import {Field} from "../Field";
import {ICollider} from "./interfaces/ICollider";

export class Rock implements IGameObject {
    private static BaseHp = 100;

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

    render(ctx: CanvasRenderingContext2D): void {
        // drawCircle(ctx, this.position.x + 5, this.position.y + 5, 5);


    }

    update(elapsed: number): void {
    }
}
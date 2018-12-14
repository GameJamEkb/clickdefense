import {Vector} from "./Vector";
import {Collider} from "./Collider";
import {Ellipse} from "./Ellipse";

export abstract class GameObject {

    collider:Collider;
    passability: boolean;
    hp: Number;
    position: Vector;

    protected constructor(position: Vector, hp: Number, passability: boolean, collider?:Collider) {
        this.position = position;
        this.hp = hp;
        this.passability = passability;
        this.collider = collider ? collider : new Ellipse(5, 5);
    }

    abstract onClick(): void;

    abstract render(ctx: CanvasRenderingContext2D): void;

    abstract update(elapsed: number): void;
}
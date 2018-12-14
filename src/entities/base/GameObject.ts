import {Vector} from "./Vector";
import {Collider} from "./Collider";
import {Ellipse} from "./Ellipse";
import {Field} from "../../Field";

export abstract class GameObject {

    collider:Collider;
    passability: boolean;
    hp: Number;
    position: Vector;
    field: Field;

    protected constructor(position: Vector, hp: Number, passability: boolean, field: Field, collider:Collider) {
        this.position = position;
        this.hp = hp;
        this.passability = passability;
        this.field = field;
        this.collider = collider ? collider : new Ellipse(5, 5);
    }

    abstract onClick(): void;

    abstract render(obj: GameObject, ctx: CanvasRenderingContext2D): void;

    abstract update(elapsed: number): void;
}
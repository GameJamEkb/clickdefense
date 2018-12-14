import {Vector} from "./Vector";

export abstract class GameObject {

    protected constructor(public position: Vector, public hp: Number, public passability: boolean) {

    }

    onClick(): void {}
}
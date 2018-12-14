import {Vector} from "../base/Vector";
import {ICollider} from "./ICollider";
import {Field} from "../../Field";
import {Circle} from "../base/Circle";

export interface IGameObject {
    collider:ICollider;
    passability: boolean;
    hp: Number;
    position: Vector;
    field: Field;

    onClick(): void;

    render(ctx: CanvasRenderingContext2D): void;

    update(elapsed: number): void;
}
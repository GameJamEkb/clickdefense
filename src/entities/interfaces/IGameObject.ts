import {Vector} from "../base/Vector";
import {ICollider} from "./ICollider";
import {Field} from "../../Field";
import {Circle} from "../base/Circle";

export interface IGameObject {
    reloadBar: boolean;
    collider:ICollider;
    passability: boolean;
    hp: number;
    maxHp: number;
    position: Vector;
    field: Field;

    onClick(): void;
    onOver(): void;

    render(ctx: CanvasRenderingContext2D): void;

    update(elapsed: number): void;
}
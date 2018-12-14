import {IGameObject} from "./IGameObject";
import {Vector} from "../base/Vector";

export interface ICollider {
    offsetX: number;
    offsetY: number;

    checkCollision(baseObjectPosition: Vector, another: IGameObject): boolean;

    isInside(baseObjectPosition: Vector, point: Vector): boolean;
}
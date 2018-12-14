import {IGameObject} from "./IGameObject";
import {Vector} from "../base/Vector";

export interface ICollider {
    checkCollision(position: Vector, another: IGameObject): boolean;
}
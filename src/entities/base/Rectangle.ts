import {ICollider} from "../interfaces/ICollider";
import {IGameObject} from "../interfaces/IGameObject";
import {Vector} from "./Vector";

export class Rectangle implements ICollider{
    constructor( public width: number,
                 public height: number) { }

    checkCollision(position: Vector, another: IGameObject): boolean {
        return false;
    }
}
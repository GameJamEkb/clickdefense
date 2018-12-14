import {ICollider} from "../interfaces/ICollider";
import {IGameObject} from "../interfaces/IGameObject";
import {Vector} from "./Vector";

export class Rectangle implements ICollider{
    constructor( public width: number,
                 public height: number) { }

    checkCollision(position: Vector, another: IGameObject): boolean {
        return false;
    }

    isInside(position: Vector, point: Vector): boolean {
        let x1 = position.x  - this.width/2;
        let y1 = position.y - this.height/2;
        let x2 = x1 + this.width;
        let y2 = y1 + this.height;
        return x1 < point.x && point.x < x2 && y1 < point.y && point.y < y2;
    }
}
import { ICollider } from "../interfaces/ICollider";
import {IGameObject} from "../interfaces/IGameObject";
import {Vector} from "./Vector";
import {Rectangle} from "./Rectangle";

export class Circle implements ICollider {
    constructor(public r: number,
                public offsetX: number,
                public offsetY: number) { }

    checkCollision(position: Vector, another: IGameObject): boolean {
        if (another.collider instanceof Circle) {
            return (this.r + another.collider.r < position.dec(another.position).length());
        }
        if (another.collider instanceof Rectangle) {
            return false;
        }
        return false;
    }

    isInside(position: Vector, point: Vector): boolean {
        return position.add(new Vector(this.offsetX, this.offsetY)).dec(point).length() < this.r;
    }

}
import { Collider } from "./Collider";

export class Rectangle extends Collider {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }
}
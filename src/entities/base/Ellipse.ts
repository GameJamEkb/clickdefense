import { Collider } from "./Collider";

export class Ellipse extends Collider {
    rx: number;
    ry: number;

    constructor(rx: number, ry: number) {
        super();
        this.rx = rx;
        this.ry = ry;
    }
}
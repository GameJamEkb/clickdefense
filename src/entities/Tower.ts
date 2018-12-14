import {GameObject} from "./base/GameObject";
import {Vector} from "./base/Vector";

export class Tower extends GameObject {
    private static BaseHp = 100;
    static Radius = 3;

    constructor(x: number, y: number) {
        super(new Vector(x, y), Tower.BaseHp, false);
    }
}
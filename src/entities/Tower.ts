import {GameObject} from "./base/GameObject";
import {Vector} from "./base/Vector";
import {Field} from "../Field"

export class Tower extends GameObject {
    private static BaseHp = 100;
    static Radius = 3;

    constructor(x: number, y: number, field: Field) {
        super(new Vector(x, y), Tower.BaseHp, false);
        field.getEnimiesFromRadius(this.position,Tower.Radius)
    }
}
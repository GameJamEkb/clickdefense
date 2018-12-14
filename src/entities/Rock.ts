import {GameObject} from "./base/GameObject";
import {Vector} from "./base/Vector";

export class Rock extends GameObject {
    private static BaseHp = 100;

    constructor(x: number, y: number) {
        super(new Vector(x, y), Rock.BaseHp, false);
    }
}
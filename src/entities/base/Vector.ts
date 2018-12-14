import {pifagor} from "../../utils";

export class Vector {
    x : number;
    y : number;

    constructor(x? : number, y? : number) {
        this.x = x ? x : 0;
        this.y = y ? y : 0;
    }

    add(v: Vector): Vector {
        return new Vector(this.x + v.x, this.y + v.y);
    }

    dec(v: Vector) : Vector {
        return new Vector(this.x - v.x, this.y - v.y);
    }

    mult(k: number) : Vector {
        return new Vector(this.x * k, this.y * k);
    }

    div(k: number) : Vector {
        return new Vector(this.x / k, this.y / k);
    }

    length() : number {
        return pifagor(this.x, this.y);
    }
}
import {pifagor} from "../../utils";

export class Vector {
    x : number;
    y : number;

    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
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

    eql(v: Vector): boolean {
        return this.x === v.x && this.y === v.y;
    }

    length() : number {
        return pifagor(this.x, this.y);
    }

    normalize(): Vector {
        return new Vector(this.x / this.length(), this.y / this.length());
    }
}
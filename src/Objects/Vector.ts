import { pifagor } from "./Misc";

export class Vector {
    x: number;
    y: number;
    constructor(x?: number, y?: number) {
        this.x = x ? x : 0;
        this.y = y ? y : 0;
    }

    add(v: Vector): Vector {
        return new Vector(this.x + v.x, this.y + v.y);
    }

    dec(v: Vector): Vector {
        return new Vector(this.x - v.x, this.y - v.y);
    }

    mult(k: number): Vector {
        return new Vector(this.x * k, this.y * k);
    }

    div(k: number): Vector {
        return new Vector(this.x / k, this.y / k);
    }

    normalize(): Vector {
        return this.div(this.length());
    }

    length(): number {
        return pifagor(this.x, this.y);
    }

    length2(): number {
        return this.x * this.x + this.y * this.y;
    }

    vect(v: Vector): number {
        return this.x * v.y - this.y * v.x;
    }

    scal(v: Vector): number {
        return this.x * v.x + this.y * v.y;
    }
}

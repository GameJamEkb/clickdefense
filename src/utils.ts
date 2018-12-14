import {Vector} from "./entities/base/Vector";
import {Cell} from "./entities/base/Cell";
import {Field} from "./Field";

export function pifagor(x: number, y: number) {
    return Math.sqrt(x * x + y * y);
}


export function cellByPostion(v: Vector, field: Field): Cell {
    return new Vector(
        Math.floor(v.x / field.cellSize),
        Math.floor(v.y / field.cellSize)
    )
}
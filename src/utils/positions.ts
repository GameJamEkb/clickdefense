import {IGameObject} from "../entities/interfaces/IGameObject";
import {Cell} from "../entities/base/Cell";
import {Vector} from "../entities/base/Vector";
import {Field} from "../Field";



export function getCellByPostion(v: Vector, field: Field): Cell {
    return new Cell(
        Math.floor(v.x / field.cellSize),
        Math.floor(v.y / field.cellSize)
    )
}

export function getPositionByCell(c: Cell, field: Field): Cell {
    return new Vector(
        Math.floor(c.x * field.cellSize + field.cellSize / 2),
        Math.floor(c.y * field.cellSize + field.cellSize / 2)
    )
}


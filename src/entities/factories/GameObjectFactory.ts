import {EmptyCell} from "../EmptyCell";
import {Rectangle} from "../base/Rectangle";
import {Cell} from "../base/Cell";
import {getPositionByCell} from "../../utils/positions";
import {Field} from "../../Field";
import {Rock} from "../Rock";

export class GameObjectFactory {
    static createRock(x: number, y: number, field: Field) {
        return new Rock(
            new Rectangle(32, 32),
            field,
            false,
            getPositionByCell(new Cell(x, y), field)
        )
    }

    static createEmptyCell(x: number, y: number, field: Field): EmptyCell {
        return new EmptyCell(
            new Rectangle(30, 30),
            field,
            true,
            getPositionByCell(new Cell(x, y), field)
        )
    }
}
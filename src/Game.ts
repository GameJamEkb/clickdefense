import {Field} from "./Field";
import {GameConfig} from "./constants/GameConfig";

export class Game {
    field: Field;

    constructor(levelNumber: number) {
        this.field = new Field(GameConfig.WidthInCells, GameConfig.HeightInCells);
        this.field.addObject()
    }
}
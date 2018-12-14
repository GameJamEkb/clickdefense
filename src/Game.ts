import {Field} from "./Field";
import {GameConfig} from "./constants/GameConfig";
import {Rock} from "./entities/Rock";

export class Game {
    field: Field;

    constructor(levelNumber: number) {

        this.field = new Field(GameConfig.WidthInCells, GameConfig.HeightInCells);


        // Test Rocck TODO: Remove
        this.field.addObject(new Rock(4 * this.field.cellSize, 6 * this.field.cellSize));
    }
}
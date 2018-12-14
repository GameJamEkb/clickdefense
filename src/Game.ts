import {Field} from "./Field";
import {GameConfig} from "./constants/GameConfig";
import {Rock} from "./entities/Rock";
import {Tower} from "./entities/Tower";
import {EmptyCell} from "./entities/EmptyCell";
import {level} from "./levels/level_1";

export class Game {
    field: Field;

    constructor(levelNumber: number) {
        this.field = new Field(GameConfig.WidthInCells, GameConfig.HeightInCells, GameConfig.CellSize);

        var split_level = level.split("\n");
        split_level.forEach( (line, i)  => {
            for(var j=0; j<=19; j++) {
                if (line.charAt(j) == "_"){
                    this.field.addObject(new EmptyCell(j * this.field.cellSize, i* this.field.cellSize, this.field));
                } else if (line.charAt(j) == "R") {
                    this.field.addObject(new Rock(j * this.field.cellSize, i* this.field.cellSize, this.field));
                };
            };
        });
        // Test Rocck TODO: Remove
        // this.field.addObject(new Rock(4 * this.field.cellSize, 6 * this.field.cellSize, this.field));
        // this.field.addObject(new Tower(6 * this.field.cellSize, 8 * this.field.cellSize, this.field))
    }

    render(ctx: CanvasRenderingContext2D) {
        this.field.render(ctx);
    }
}
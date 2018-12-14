import {Field} from "./Field";
import {GameConfig} from "./constants/GameConfig";
import {Rock} from "./entities/Rock";
import {Enemy} from "./entities/Enemy";
import {Vector} from "./entities/base/Vector";

export class Game {
    field: Field;

    constructor(levelNumber: number) {

        this.field = new Field(GameConfig.WidthInCells, GameConfig.HeightInCells, GameConfig.CellSize);


        // Test Rocck TODO: Remove
        this.field.addObject(new Rock(4 * this.field.cellSize, 6 * this.field.cellSize, this.field));

        // Test Enemy TODO: Kill them all
        this.field.addEnemy(new Enemy(new Vector(20, 20), this.field))
    }

    render(ctx: CanvasRenderingContext2D) {
        this.field.render(ctx);
    }

    update(elapsed: number): void {
        this.field.update(elapsed);
    }
}
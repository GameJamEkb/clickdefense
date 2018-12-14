import {Field} from "./Field";
import {GameConfig} from "./constants/GameConfig";
import {level} from "./levels/level_1";
import {GameObjectFactory} from "./entities/factories/GameObjectFactory";
import {Player} from "./Player";
import {Vector} from "./entities/base/Vector";
import {Cell} from "./entities/base/Cell";

export class Game {
    field: Field;
    player: Player;

    constructor(levelNumber: number) {
        this.field = new Field(GameConfig.WidthInCells, GameConfig.HeightInCells, GameConfig.CellSize, levelNumber);
        this.player = new Player(
            "Гордый Арсений",
            GameConfig.StartGold,
            this
        );

        var split_level = level.split("\n");
        split_level.forEach( (line, i)  => {
            for(var j=0; j<=19; j++) {
                if (line.charAt(j) == "_"){
                    this.field.addObject(GameObjectFactory.createEmptyCell(new Cell(j, i), this.field));
                } else if (line.charAt(j) == "R") {
                    this.field.addObject(GameObjectFactory.createRock(new Cell(j, i), this.field));
                // } else if (line.charAt(j) == "T") {
                //     this.field.addObject(new Tower(j * this.field.cellSize, i* this.field.cellSize, this.field));
                };
            };
        });

        // Test Rocck TODO: Remove
        this.field.addObject(GameObjectFactory.createRock(new Cell(4, 6), this.field));

        // Test Enemy TODO: Kill them all
        this.field.addEnemy(GameObjectFactory.createEnemy(new Vector(30, 30), this.field));

    }

    render(ctx: CanvasRenderingContext2D) {
        this.field.render(ctx);
    }

    update(elapsed: number): void {
        this.field.update(elapsed);
    }

    onLose() {
        //TODO: End level and restart
    }
}
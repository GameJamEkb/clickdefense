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

        // Test Rocck TODO: Remove
        this.field = new Field(GameConfig.WidthInCells, GameConfig.HeightInCells, GameConfig.CellSize, levelNumber);
        this.player = new Player(
            "Гордый Арсений",
            GameConfig.StartGold,
            this
        );
        // this.field.addObject(GameObjectFactory.createRock(4, 6, this.field));
        this.loadLevel()

        // Test Rocck TODO: Remove
        this.field.addObject(GameObjectFactory.createRock(new Cell(4, 6), this.field));

        // Test Enemy TODO: Kill them all
        setInterval(() => {
            this.field.addEnemy(GameObjectFactory.createEnemy(new Vector(30, 30), this.field));
        }, 10000);

    }

    render(ctx: CanvasRenderingContext2D) {
        this.field.render(ctx);
    }

    update(elapsed: number): void {
        this.field.update(elapsed);
    }

    loadLevel(): void {
        const split_level = level.split("\n");
        split_level.forEach((line, i) => {
            for (let j = 0; j <= 19; j++) {
                // const cell = getCellByPostion( new Vector(j,i) ,this.field)
                const cell = new Cell(j, i);
                if (line.charAt(j) == "_") {
                    this.field.addObject(GameObjectFactory.createEmptyCell(cell, this.field));
                } else if (line.charAt(j) == "R") {
                    this.field.addObject(GameObjectFactory.createRock(cell, this.field));
                } else if (line.charAt(j) == "T") {
                    this.field.addObject(GameObjectFactory.createTower(cell, this.field));
                }
            }
        });
        this.player.onLevelStart(this.field)
    }

    onLose() {
        //TODO: End level and restart
    }
}
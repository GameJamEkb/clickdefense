import {Field} from "./Field";
import {GameConfig} from "./constants/GameConfig";
import {Rock} from "./entities/Rock";
import {Tower} from "./entities/Tower";
import {EmptyCell} from "./entities/EmptyCell";
import {level} from "./levels/level_1";
import {Enemy} from "./entities/Enemy";
import {Vector} from "./entities/base/Vector";
import {GameObjectFactory} from "./entities/factories/GameObjectFactory";

export class Game {
    field: Field;

    constructor(levelNumber: number) {
        this.field = new Field(GameConfig.WidthInCells, GameConfig.HeightInCells, GameConfig.CellSize);
        this.loadLevel()
        // Test Rocck TODO: Remove
        // this.field.addObject(GameObjectFactory.createRock(4, 6, this.field));

        // Test Enemy TODO: Kill them all
        this.field.addEnemy(GameObjectFactory.createEnemy(30, 30, this.field));

    }

    render(ctx: CanvasRenderingContext2D) {
        this.field.render(ctx);
    }

    update(elapsed: number): void {
        this.field.update(elapsed);
    }

    loadLevel(): void {
        var split_level = level.split("\n");
        split_level.forEach( (line, i)  => {
            for(var j=0; j<=19; j++) {
                if (line.charAt(j) == "_"){
                    this.field.addObject(GameObjectFactory.createEmptyCell(j, i, this.field));
                } else if (line.charAt(j) == "R") {
                    this.field.addObject(GameObjectFactory.createRock(j, i, this.field));
                } else if (line.charAt(j) == "T") {
                    this.field.addObject(GameObjectFactory.createTower(j , i , this.field));
                };
            };
        });
    }

}
import {Cell} from "./entities/base/Cell";
import {GameObjectsFactory} from "./entities/factories/GameObjectsFactory";
import {TowerFactory} from "./entities/factories/TowerFactory";
import {EnemiesEnum} from "./entities/gameObjects/Spawner";
import {Game} from "./Game";
import {LevelsFactory} from "./entities/factories/LevelsFactory";
import {Level} from "./levels/Level";
import {GameConfig} from "./constants/GameConfig";

export class Loader {
    static injectLevelToGame(game: Game, id: number): void {
        const level: Level = LevelsFactory.createLevelById(id);
        var split_level = level.charField.split("\n");
        split_level.forEach( (line, i)  => {
            for(var j = 0; j < GameConfig.WidthInCells; j++) {
                var cell = new Cell(j,i);
                if (line.charAt(j) == "_"){
                    game.field.addObject(GameObjectsFactory.createEmptyCell(cell, game.field));
                } else if (line.charAt(j) == "R") {
                    game.field.addObject(GameObjectsFactory.createRock(cell, game.field));
                } else if (line.charAt(j) == "T") {
                    game.field.addObject(TowerFactory.createBaseTower(cell , game.field));
                } else if (line.charAt(j) == "1") {
                    game.field.addObject(GameObjectsFactory.createSpawner(cell, game.field, EnemiesEnum.Skelet));
                } else if (line.charAt(j) == "2") {
                    game.field.addObject(GameObjectsFactory.createSpawner(cell, game.field, EnemiesEnum.Ork));
                } else if (line.charAt(j) == "3") {
                    game.field.addObject(GameObjectsFactory.createSpawner(cell, game.field, EnemiesEnum.Slime));
                } else if (line.charAt(j) == "4") {
                    game.field.addObject(GameObjectsFactory.createSpawner(cell, game.field, EnemiesEnum.Stick));
                } else if (line.charAt(j) == "S") {
                    game.field.addObject(GameObjectsFactory.createSmartSpawner(cell, game.field));
                } else if (line.charAt(j) == "O") {
                    game.field.addObject(TowerFactory.createSplashTower(cell, game.field));
                } else if (line.charAt(j) == "L") {
                    game.field.addObject(TowerFactory.createTrapTower(cell, game.field));
                } else if (line.charAt(j) == "G") {
                    game.field.addObject(GameObjectsFactory.createGold(cell, game.field, game.player));
                }
            }
        });
    };


}
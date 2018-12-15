import {Field} from "./Field";
import {GameConfig} from "./constants/GameConfig";
import {level} from "./levels/level_1";
import {TowerFactory} from "./entities/factories/TowerFactory";
import {Player} from "./Player";
import {Vector} from "./entities/base/Vector";
import {Cell} from "./entities/base/Cell";
import {GameObjectsFactory} from "./entities/factories/GameObjectsFactory";
import {getCellByPostion} from "./utils/positions";
import {BaseTower} from "./entities/towers/BaseTower";
import {EmptyCell} from "./entities/gameObjects/EmptyCell";
import {EnemiesEnum} from "./entities/gameObjects/Spawner";

export class Game {
    field: Field;
    player: Player;

    selectedTower = 'BaseTower';

    constructor(levelNumber: number) {
        this.player = new Player(
            "Гордый Арсений",
            GameConfig.StartGold,
            this
        );

        this.field = new Field(
            GameConfig.WidthInCells,
            GameConfig.HeightInCells,
            GameConfig.CellSize,
            levelNumber,
            this.player);

        this.loadLevel()
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
                var cell = new Cell(j,i)
                if (line.charAt(j) == "_"){
                    this.field.addObject(GameObjectsFactory.createEmptyCell(cell, this.field));
                } else if (line.charAt(j) == "R") {
                    this.field.addObject(GameObjectsFactory.createRock(cell, this.field));
                } else if (line.charAt(j) == "T") {
                    this.field.addObject(TowerFactory.createBaseTower(cell , this.field));
                } else if (line.charAt(j) == "1") {
                    this.field.addObject(GameObjectsFactory.createSpawner(cell, this.field, EnemiesEnum.Skelet));
                } else if (line.charAt(j) == "2") {
                    this.field.addObject(GameObjectsFactory.createSpawner(cell, this.field, EnemiesEnum.Ork));
                } else if (line.charAt(j) == "3") {
                    this.field.addObject(GameObjectsFactory.createSpawner(cell, this.field, EnemiesEnum.Slime));
                } else if (line.charAt(j) == "4") {
                    this.field.addObject(GameObjectsFactory.createSpawner(cell, this.field, EnemiesEnum.Stick));
                } else if (line.charAt(j) == "S") {
                    this.field.addObject(GameObjectsFactory.createSmartSpawner(cell, this.field));
                } else if (line.charAt(j) == "O") {
                    this.field.addObject(TowerFactory.createSplashTower(cell, this.field));
                } else if (line.charAt(j) == "L") {
                    this.field.addObject(TowerFactory.createTrapTower(cell, this.field));
                } else if (line.charAt(j) == "G") {
                    this.field.addObject(GameObjectsFactory.createGold(cell, this.field));
                    this.field.goldPosition = cell;
                }
            }
        });
        this.player.onLevelStart(this.field)
    };

    onLose() {
        //TODO: End level and restart
    }

    mouseClick(x:number, y:number){
        let clickHandle = false;
        this.field.enemies.forEach( enemy =>{
                if (enemy.collider.isInside(enemy.position, new Vector(x-GameConfig.GameFieldTranslateX,y-GameConfig.GameFieldTranslateY))){
                    enemy.onClick();
                    clickHandle = true;
                };
            });

        if (clickHandle) return;

        this.field.objects.forEach( line =>{
            line.forEach( object =>{
                if (object.collider.isInside(object.position, new Vector(x-GameConfig.GameFieldTranslateX,y-GameConfig.GameFieldTranslateY))){
                    object.onClick();
                };
            });
        });

        const cell = getCellByPostion(new Vector(x-GameConfig.GameFieldTranslateX,y-GameConfig.GameFieldTranslateY), this.field);
        const obj = this.field.objects[cell.x][cell.y];
        if (obj instanceof EmptyCell) {
            this.field.addObject(TowerFactory.createTowerById(this.selectedTower, cell, this.field));
        }
    }
    mouseOver(x:number, y:number){
        this.field.objects.forEach( line =>{
            line.forEach( object =>{
                if (object.collider.isInside(object.position, new Vector(x-GameConfig.GameFieldTranslateX,y-GameConfig.GameFieldTranslateY))){
                    object.onOver();
                };
            });
        });
    }
}
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
                    this.field.addObject(GameObjectFactory.createEmptyCell(cell, this.field));
                } else if (line.charAt(j) == "R") {
                    this.field.addObject(GameObjectFactory.createRock(cell, this.field));
                } else if (line.charAt(j) == "T") {
                    this.field.addObject(GameObjectFactory.createBaseTower(cell , this.field));
                } else if (line.charAt(j) == "S") {
                    this.field.addObject(GameObjectFactory.createSpawner(cell, this.field));
                } else if (line.charAt(j) == "O") {
                    this.field.addObject(GameObjectFactory.createSplashTower(cell, this.field));
                } else if (line.charAt(j) == "G") {
                    this.field.addObject(GameObjectFactory.createGold(cell, this.field));
                    this.field.goldPosition = cell;
                }
            }
        });
        this.player.onLevelStart(this.field)
    }

    onLose() {
        //TODO: End level and restart
    }

    mouseClick(x:number, y:number){
        this.field.objects.forEach( line =>{
            line.forEach( object =>{
                if (object.collider.isInside(object.position, new Vector(x-GameConfig.GameFieldTranslateX,y-GameConfig.GameFieldTranslateY))){
                    object.onClick();
                };
            });
        });
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
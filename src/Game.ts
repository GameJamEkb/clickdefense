import {Field} from "./Field";
import {GameConfig} from "./constants/GameConfig";
import {TowerFactory} from "./entities/factories/TowerFactory";
import {Player} from "./Player";
import {Vector} from "./entities/base/Vector";
import {Cell} from "./entities/base/Cell";
import {GameObjectsFactory} from "./entities/factories/GameObjectsFactory";
import {getCellByPostion} from "./utils/positions";
import {BaseTower} from "./entities/towers/BaseTower";
import {EmptyCell} from "./entities/gameObjects/EmptyCell";
import {EnemiesEnum} from "./entities/gameObjects/Spawner";
import {Tower} from "./entities/gameObjects/Tower";
import {Rock} from "./entities/gameObjects/Rock";
import {bfs} from "./utils/bfs";
import {Loader} from "./Loader";

export class Game {
    field: Field;
    player: Player;

    selectedTower = '';

    constructor(levelNumber: number) {
        this.player = new Player(
            GameConfig.PlayerName,
            GameConfig.StartGold,
            this
        );

        this.field = new Field(
            GameConfig.WidthInCells,
            GameConfig.HeightInCells,
            GameConfig.CellSize,
            levelNumber,
            this.player
        );

        Loader.injectLevelToGame(this, 1);
    }

    render(ctx: CanvasRenderingContext2D) {
        this.field.render(ctx);
    }

    update(elapsed: number): void {
        this.field.update(elapsed);
    }

    onLose() {
        this.field.objects.length = 0;
    }

    mouseClick(x:number, y:number){
        let clickHandle = false;
        this.field.enemies.forEach( enemy =>{
                if (enemy.collider.isInside(enemy.position, new Vector(x,y))){
                    enemy.onClick();
                    clickHandle = true;
                }
            });

        if (clickHandle) return;

        this.field.objects.forEach( line =>{
            line.forEach( object =>{
                if (object.collider.isInside(object.position, new Vector(x,y))){
                    object.onClick();
                }
            });
        });

        const cell = getCellByPostion(new Vector(x,y), this.field);
        const obj = this.field.objects[cell.x][cell.y];
        const tower = TowerFactory.createTowerById(this.selectedTower, cell, this.field) as Tower;
        if ((obj instanceof EmptyCell || obj instanceof Rock) && this.selectedTower && tower.cost <= this.player.gold) {
            this.field.addObject(tower);
            let blocked = false;
            for (let cell of this.field.getSpawns()) {
                let way = bfs(this.field.objects, cell, getCellByPostion(this.field.goldPosition(), this.field));
                if (!way.length) {
                    blocked = true
                }
            }

            if (blocked) {
                this.field.addObject(obj);
            } else {
                this.player.gold -= tower.cost;
            }
        }
        console.log(this.selectedTower);
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
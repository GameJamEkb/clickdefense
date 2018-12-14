import {GameObject} from "./entities/base/GameObject";
import {Vector} from "./entities/base/Vector";
import {Rock} from "./entities/Rock";
import {Enemy} from "./entities/Enemy";
import {cellByPostion} from "./utils";
import {pifagor} from "./utils";

export class Field {
    objects: Array<Array<GameObject>>;
    goldPosition: Vector;
    width: number;
    height: number;
    cellSize: number;
    enemies: Array<Enemy>;


    constructor(width: number, height: number, cellSize: number) {
        this.width = width;
        this.height = height;
        this.cellSize = cellSize;
        this.goldPosition = new Vector(0,0);
        this.objects = Array.from({length: this.width}).map(_ => Array.from({length: this.height}))
        this.enemies = [];
    }

    addObject(gameObject: GameObject) {
        var cell = cellByPostion(gameObject.position, this);
        this.objects[cell.x][cell.y] = gameObject;
    }

    addEnemy(enemy: Enemy){
        this.enemies.push(enemy)
    }

    getEnemiesFromRadius(position: Vector, radius: number): Array<Enemy>
    {
        var enemiesInRadius: Array<Enemy> = [];
        this.enemies.forEach(enemy => {
            if (position.dec(enemy.position).length() < radius) {
                enemiesInRadius.push(enemy)
            }
        });
        return enemiesInRadius
    }
}
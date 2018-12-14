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
        this.enemies = new Array<Enemy>();
    }

    addObject(gameObject: GameObject) {
        var cell = cellByPostion(gameObject.position, this);
        this.objects[cell.x][cell.y] = gameObject;
    }

    addEnemy(enemy: Enemy){
        this.enemies.push(enemy)
    }

    getEnimiesFromRadius(position: Vector, radius: number): Array<Enemy>
    {
        var enemiesInRadius = new Array<Enemy>();
        this.enemies.forEach(function (enemy) {
            if (pifagor(Math.abs(enemy.position.x - position.x), Math.abs(enemy.position.y - position.y)) < radius) {
                enemiesInRadius.push(enemy)
            }
        })
        return enemiesInRadius
    }
}
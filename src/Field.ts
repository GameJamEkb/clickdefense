import {GameObject} from "./entities/base/GameObject";
import {Vector} from "./entities/base/Vector";
import {Rock} from "./entities/Rock";
import {Enemy} from "./entities/Enemy";
import {cellByPostion} from "./utils";
import {pifagor} from "./utils";
import {EmptyCell} from "./entities/EmptyCell";
import {Cell} from "./entities/base/Cell";

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
        this.goldPosition = new Cell(5,5);
        this.objects = Array.from({length: this.width})
            .map((_, x) => Array.from({length: this.height})
                .map((_, y) => new EmptyCell(x, y, this)));
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

    render(ctx: CanvasRenderingContext2D): void {
        this.objects.forEach(line =>
            line.forEach(x => x.render(ctx))
        );

        this.enemies.forEach(enemy => enemy.render(ctx));
    }

    update(elapsed: number): void {
        this.enemies.forEach(enemy => enemy.update(elapsed));
    }
}
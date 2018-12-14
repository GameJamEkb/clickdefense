import {IGameObject} from "./entities/interfaces/IGameObject";
import {Vector} from "./entities/base/Vector";
import {Enemy} from "./entities/Enemy";
import {getCellByPostion} from "./utils/positions";
import {Cell} from "./entities/base/Cell";
import {GameObjectFactory} from "./entities/factories/GameObjectFactory";
import {HpBar} from "./entities/ui/HpBar";

export class Field {
    objects: Array<Array<IGameObject>>;
    goldPosition: Vector;
    enemies: Array<Enemy>;



    constructor(public width: number,
                public height: number,
                public cellSize: number,
                public levelId: number)
    {
        this.goldPosition = new Cell(5,5);
        this.objects = Array.from({length: this.width})
            .map((_, x) => Array.from({length: this.height})
                .map((_, y) => GameObjectFactory.createEmptyCell(new Cell(x, y), this)));
        this.enemies = [];
    }

    addObject(gameObject: IGameObject) {
        var cell = getCellByPostion(gameObject.position, this);
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
        this.enemies.forEach(enemy => HpBar.render(ctx, enemy, this));


    }

    update(elapsed: number): void {
        this.objects.forEach(line =>
            line.forEach(x => x.update(elapsed))
        );
        this.enemies.forEach(enemy => enemy.update(elapsed));
    }
}
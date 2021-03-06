import {IGameObject} from "./entities/interfaces/IGameObject";
import {Vector} from "./entities/base/Vector";
import {Enemy} from "./entities/gameObjects/Enemy";
import {getCellByPostion} from "./utils/positions";
import {Cell} from "./entities/base/Cell";
import {TowerFactory} from "./entities/factories/TowerFactory";
import {HpBar} from "./entities/ui/HpBar";
import {ReloadBar} from "./entities/ui/ReloadBar";
import {IReloader} from "./entities/interfaces/IReloader";
import {randomInt} from "./utils/nums";
import {GameConfig} from "./constants/GameConfig";
import {drawRectangleCollider} from "./utils/render";
import {Rectangle} from "./entities/base/Rectangle";
import {Tower} from "./entities/gameObjects/Tower";
import {Player} from "./Player";
import {GameObjectsFactory} from "./entities/factories/GameObjectsFactory";
import {Spawner} from "./entities/gameObjects/Spawner";
import {SmartSpawner} from "./entities/gameObjects/SmartSpawner";
import {Gold} from "./entities/gameObjects/Gold";

export class Field {
    objects: Array<Array<IGameObject>>;
    enemies: Array<Enemy>;

    constructor(public width: number,
                public height: number,
                public cellSize: number,
                public levelId: number,
                public player: Player)
    {
        this.objects = Array.from({length: this.width})
            .map((_, x) => Array.from({length: this.height})
                .map((_, y) => GameObjectsFactory.createEmptyCell(new Cell(x, y), this)));
        this.enemies = [];
    }

    addObject(gameObject: IGameObject) {
        var cell = getCellByPostion(gameObject.position, this);
        this.objects[cell.x][cell.y] = gameObject;
    }

    addEnemy(enemy: Enemy){
        this.enemies.push(enemy)
    }

    killEnemy()
    {
        this.enemies
            .filter(enemy => enemy.hp <= 0 && !enemy.finished)
            .forEach(enemy => this.player.gold += enemy.goldCount);
        this.enemies = this.enemies.filter(enemy => enemy.hp > 0);
    }

    killTrap(position : Vector)
    {
        var cell = getCellByPostion(position, this);
        this.objects[cell.x][cell.y] = GameObjectsFactory.createEmptyCell(cell, this)
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

        this.enemies.sort((a, b) => a.position.y - b.position.y);

        this.enemies.forEach(enemy => enemy.render(ctx));

        if (GameConfig.ShowEnemiesHitBars) {
            this.enemies.forEach(enemy => HpBar.render(ctx, enemy, this));
        }

        if (GameConfig.ShowTowersReloadBars) {
            this.objects.forEach(line =>
                line
                    .filter(x => x.reloadBar)
                    // @ts-ignore
                    .forEach((x) => ReloadBar.render(ctx, x, this))
            );
        }

        if (GameConfig.ShowTowersColliders) {
            this.objects.forEach(line =>
                line
                    .filter(x => x instanceof Tower)
                    // @ts-ignore
                    .forEach(x => x.drawCollider(ctx, this))
            );
        }

    }

    goldPosition(): Vector {
        for (let line of this.objects) {
            for (let obj of line) {
                if (obj instanceof Gold) {
                    return getCellByPostion(obj.position, this);
                }
            }
        }
        throw new Error("No gold on map");
    }


    getSpawns(): Array<Cell> {
        let ans: Array<Cell> = [];
        this.objects.forEach( line =>
            line.forEach(e => e instanceof Spawner || e instanceof SmartSpawner ? ans.push(getCellByPostion(e.position, this)) : null)
        );
        return ans;
    }

    stealGold(goldPower: number) {
        this.player.gold -= goldPower;
        this.player.score -= goldPower * GameConfig.EasyCoeff;
        return goldPower;
    }

    update(elapsed: number): void {
        this.objects.forEach(line =>
            line.forEach(x => x.update(elapsed))
        );
        this.enemies.forEach(enemy => enemy.update(elapsed));
    }
}
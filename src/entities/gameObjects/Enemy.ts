import {IGameObject} from "../interfaces/IGameObject";
import {Vector} from "../base/Vector";
import {IMover} from "../interfaces/IMover";
import {getCellByPostion, getPositionByCell} from "../../utils/positions";
import {Cell} from "../base/Cell";
import {Field} from "../../Field";
import {ICollider} from "../interfaces/ICollider";
import {bfs} from "../../utils/bfs";
import { Animation} from "../../Animation";
import {drawRectangleCollider} from "../../utils/render";
import {Rectangle} from "../base/Rectangle";
import {randomInt} from "../../utils/nums";
import {GameConfig} from "../../constants/GameConfig";

export class Enemy implements IGameObject, IMover {
    nextPoint: Vector = this.position;
    private point?: Vector;
    finished: boolean = false;
    poison: number = 0;

    constructor(public collider: ICollider,
                public field: Field,
                public passability: boolean,
                public position: Vector,
                public hp: number,
                public maxHp: number,
                public reloadBar: boolean,
                public animation: Animation,
                public destination: Cell,
                public goldCount: number,
                public runAway: boolean,
                public startPosition: Cell,
                public speed: number,
                public complexity: number
    ) { }

    get cell(): Cell {
        return getCellByPostion(this.position, this.field);
    }

    findNextPoint(): Cell {
        const path = bfs(this.field.objects, this.cell, this.destination);
        if (path.length) {
            return path[0];
        }

        return getCellByPostion(this.position, this.field);
    }

    setNextPoint(): void {
        const nextCell = this.findNextPoint();
        this.nextPoint = new Vector(
            this.field.cellSize / 2 + nextCell.x * this.field.cellSize,
            this.field.cellSize / 2 + nextCell.y * this.field.cellSize
        );
    }

    onClick(): void {
        this.gotHit(50);
        console.log("AAaaaa")
    }

    onOver(): void {

    }

    gotHit(powerHit: number): void {
        this.hp -= powerHit
    }

    render(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath();
        const frame = this.animation.frame;
        ctx.drawImage(this.animation.sprite, frame.x, frame.y, 32, 40, this.position.x - 18, this.position.y - 35, 32, 40);
        if (GameConfig.ShowEnemiesColliders) {
            drawRectangleCollider(ctx, this.position, this.collider as Rectangle);
        }
        ctx.closePath();

    }

    addPoison(poison: number): void {
        this.poison += poison;
    }

    update(elapsed: number): void {
        this.hp -= this.poison * elapsed;
        if (this.hp <= 0){
            this.field.killEnemy()
        }
        this.animation.update(elapsed);
        if (this.position.dec(getPositionByCell(this.destination, this.field)).length() < GameConfig.PathFinderPixelDelta) {
            if (this.runAway) {
                this.hp = 0;
                this.finished = true;
                this.field.killEnemy();
            } else {
                this.goldCount += this.field.stealGold(this.hp / 10);
                this.runAway = true;
                this.destination = this.startPosition;
            }
        }

        if (this.nextPoint.dec(this.position).length() < GameConfig.PathFinderPixelDelta) {
            this.setNextPoint();
        } else {
            const direction = this.nextPoint.dec(this.position).normalize();
            this.position = this.position.add(direction.mult(this.speed));
        }
    }
}
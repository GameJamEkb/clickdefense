import {IGameObject} from "./interfaces/IGameObject";
import {Vector} from "./base/Vector";
import {IMover} from "./interfaces/IMover";
import {getCellByPostion} from "../utils/positions";
import {Cell} from "./base/Cell";
import {Field} from "../Field";
import {ICollider} from "./interfaces/ICollider";
import {bfs} from "../utils/bfs";

export class Enemy implements IGameObject, IMover {
    nextPoint: Vector = this.position;
    destination: Cell = this.position;
    private point?: Vector;


    constructor(public collider: ICollider,
                public field: Field,
                public passability: boolean,
                public position: Vector,
                public hp: number,
                public sprite: HTMLImageElement
    ) {

        this.destination = field.goldPosition;
    }

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
    }

    gotHit(powerHit: number): void {
        this.hp = -powerHit
    }

    render(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath();
        ctx.fillStyle = 'red';
        ctx.fillRect(this.position.x - 15, this.position.y - 15, 30, 30);
        ctx.drawImage(this.sprite, 0, 0, 10, 10, this.position.x - 16, this.position.y - 16, 30, 30);
        ctx.closePath();
    }

    update(elapsed: number): void {
        if (this.nextPoint.dec(this.position).length() < 2) {
            this.setNextPoint();
        } else {
            const direction = this.nextPoint.dec(this.position).normalize();
            this.position = this.position.add(direction.mult(2));
        }
    }


}
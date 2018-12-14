import {GameObject} from "./base/GameObject";
import {Vector} from "./base/Vector";
import {IMover} from "./interfaces/IMover";
import {bfs, cellByPostion} from "../utils";
import {Cell} from "./base/Cell";
import {Field} from "../Field";
import {Rectangle} from "./base/Rectangle";

export class Enemy extends GameObject implements IMover {
    nextPoint: Vector = this.position;
    destination: Cell = this.position;

    constructor(position: Vector, hp: number, field: Field, public sprite: HTMLImageElement) {
        super(position, hp, true, field, new Rectangle(10, 10));

        this.destination = field.goldPosition;
    }


    get cell(): Cell {
        return cellByPostion(this.position, this.field);
    }

    findNextPoint(): Cell {
        const path = bfs(this.field.objects, this.cell, this.destination);
        if (path.length) {
            return path[0];
        }

        return cellByPostion(this.position, this.field);
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
        ctx.drawImage(this.sprite, 0, 0, 10, 10, this.position.x - 16, this.position.y - 16, 32, 32);
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
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

    constructor(position: Vector, field: Field) {
        super(position, 10, true, field, new Rectangle(10, 10));
    }

    private point?: Vector;

    get cell(): Cell {
        return cellByPostion(this.position, this.field);
    }

    findNextPoint(): Vector {
        this.point = undefined;
        const path = bfs(this.field.objects, this.cell, this.destination);
        if (path.length) {
            return path[0];
        }

        return this.cell;
    }


    onClick(): void {
    }

    gotHit(powerHit: number): void {
        this.hp =- powerHit
    }

    render(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath();
        ctx.fillStyle = 'red';
        ctx.fillRect(this.position.x - 15, this.position.y - 15, 30 ,30);
        ctx.closePath();
    }

    update(elapsed: number): void {
       this.position =  this.position.add(new Vector(10 * elapsed, 10 * elapsed));
        this.destination = this.field.goldPosition;
        this.nextPoint = this.findNextPoint();
    }
}
import {GameObject} from "./base/GameObject";
import {Vector} from "./base/Vector";
import {IMover} from "./interfaces/IMover";
import {bfs, cellByPostion} from "../utils";
import {Cell} from "./base/Cell";

export class Enemy extends GameObject implements IMover {
    nextPoint: Vector = this.position;
    destination: Cell = this.position;

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
    }

    update(elapsed: number): void {
        this.destination = this.field.goldPosition;
        this.nextPoint = this.findNextPoint();


    }
}
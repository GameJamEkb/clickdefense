import { Vector } from "./Vector";
import * as  Consts from "../Consts";
import {IStrategy} from "../Strategies";



export class Circle {
    position: Vector;
    speed: Vector;
    acceleration: Vector;
    r: number;
    removed: boolean;
    color: string;


    constructor(x: number, y: number, r: number, speed?: Vector, color?: string) {
        this.position = new Vector(x, y);
        this.speed = speed ? speed : new Vector(0, 0);
        this.color = color ? color : `hsla(${Math.random() * 360}, 100%, 50%, 1)`;
        this.acceleration = new Vector(0, Consts.g);
        this.r = r;
    }

    processAcceleration(elapsed: number) {
        this.speed = this.speed.add(this.acceleration.mult(elapsed));
    }

    processSpeed(elapsed: number) {
        this.position = this.position.add(this.speed.mult(elapsed));
    }

    processFloorColision(x1: number, y1: number, x2: number, y2: number) {
        if (this.position.x - this.r < x1) {
            this.speed.x = Math.abs(this.speed.x);
        }
        if (this.position.x + this.r  > x2) {
            this.speed.x = -Math.abs(this.speed.x);
        }
        if (this.position.y - this.r < y1) {
            this.speed.y = Math.abs(this.speed.y);
        }
        if (this.position.y + this.r  > y2) {
            this.speed.y = -Math.abs(this.speed.y);
        }
    }

    checkCollision(opponent: Circle) : boolean {
        return this.position.dec(opponent.position).length() < this.r + opponent.r;
    }

    processCollision(opponent: Circle, strategy: IStrategy) {
        if (this.removed || opponent.removed)
            return;

        if (this.checkCollision(opponent)) {
            strategy.process(this, opponent);
        }
    }
}


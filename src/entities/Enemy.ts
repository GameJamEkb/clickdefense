import {Field} from "../Field";
import {GameObject} from "./base/GameObject";
import {Vector} from "./base/Vector";
import {IMover} from "./interfaces/IMover";
import {bfs} from "../utils";

class Enemy extends GameObject implements IMover {
    destination: Vector;

    private point?: Vector;

    constructor(
        public position: Vector,
        public hp: Number,
        public field: Field
    ) {
        super(position, hp, true);
        this.destination = this.field.goldPosition;
    }

    get cell(): Vector {
        return new Vector(
            Math.floor(this.position.x / this.field.cellSize),
            Math.floor(this.position.y / this.field.cellSize)
        )
    }

    findNextPoint(): Vector {
        this.point = undefined;
        const path = bfs(this.field.objects, this.cell, this.destination);
        if (path.length) {
            return path[0];
        }

        return this.cell;
    }

    render() {

    }
}
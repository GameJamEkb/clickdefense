import {Field} from "../Field";
import {GameObject} from "./base/GameObject";
import {Vector} from "./base/Vector";
import {IMover} from "./interfaces/IMover";

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

    findNextPoint(): Vector {
        this.point = undefined;
        return new Vector
    }
}
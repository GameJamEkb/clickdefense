import {GameObject} from "./entities/base/GameObject";
import {Vector} from "./entities/base/Vector";
import {Rock} from "./entities/Rock";

export class Field {
    objects: Array<Array<GameObject>>;
    goldPosition: Vector;
    width: number;
    height: number;
    cellSize: number;

    constructor(width: number, height: number, cellSize: number) {
        this.width = width;
        this.height = height;
        this.cellSize = cellSize;
        this.goldPosition = new Vector(0,0);
        this.objects = Array.from({length: this.width}).map(_ => Array.from({length: this.height}))
    }

    addObject(gameObject: GameObject) {
        if (gameObject instanceof Rock) {

        }
    }
}
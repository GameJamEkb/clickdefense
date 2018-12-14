import {GameObject} from "./entities/base/GameObject";
import {Vector} from "./entities/base/Vector";
import {Rock} from "./entities/Rock";
import {Enemy} from "./entities/Enemy";

export class Field {
    objects: Array<Array<GameObject>>;
    goldPosition: Vector;
    width: number;
    height: number;
    cellSize: number;
    enemies: Array<Enemy>;


    constructor(width: number, height: number, cellSize: number) {
        this.width = width;
        this.height = height;
        this.cellSize = cellSize;
        this.goldPosition = new Vector(0,0);
        this.objects = Array.from({length: this.width}).map(_ => Array.from({length: this.height}))
        this.enemies = new Array<Enemy>();
    }

    addObject(gameObject: GameObject) {
        if (gameObject instanceof Rock) {

        }
    }

    getEnimiesFromRadius(position: Vector, radius: number): Array<Enemy>
    {

        return Enemy
    }


}
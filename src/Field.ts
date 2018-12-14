import {GameObject} from "./entities/base/GameObject";
import {Game} from "./Game";
import {Rock} from "./entities/Rock";

export class Field {
    objects: Array<Array<GameObject>>;
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
        this.objects = Array.from({length: this.width}).map(_ => Array.from({length: this.height}))
    }

    addObject(gameObject: GameObject) {
        if (gameObject instanceof Rock) {

        }
    }
}
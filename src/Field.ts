import {GameObject} from "./entities/base/GameObject";

export class Field {
    objects: Array<Array<GameObject>>;
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
        this.objects = Array.from({length: this.width}).map(_ => Array.from({length: this.height}))
    }
}
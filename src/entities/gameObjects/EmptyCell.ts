import {IGameObject} from "../interfaces/IGameObject";
import {Vector} from "../base/Vector";
import {Field} from "../../Field";
import {ICollider} from "../interfaces/ICollider";
import {randomInt} from "../../utils/nums";
import {GameObjectsFactory} from "../factories/GameObjectsFactory";
import {TowerFactory} from "../factories/TowerFactory";
import {getCellByPostion} from "../../utils/positions";

export class EmptyCell implements IGameObject {
    private readonly hasScull: boolean = false;

    constructor(public collider: ICollider,
                public field: Field,
                public passability: boolean,
                public position: Vector,
                public hp: number,
                public maxHp: number,
                public reloadBar: boolean,
                public sprite: HTMLImageElement) {

        if (randomInt(0, 100) <= 1) {
            this.hasScull = true;
        }

    }

    onClick(): void {
    }

    onOver(): void {

    }

    render(ctx: CanvasRenderingContext2D): void {
        ctx.drawImage(this.sprite, 32 * 2, 64 * 2, 32, 32, this.position.x - 16, this.position.y - 16, 32, 32)
        if (this.hasScull) {
            ctx.drawImage(this.sprite, 448, 448, 32, 32, this.position.x - 16, this.position.y - 16, 32, 32)
        }

    }

    update(elapsed: number): void {
    }
}
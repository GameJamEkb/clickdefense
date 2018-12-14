import {IGameObject} from "./interfaces/IGameObject";
import {Vector} from "./base/Vector";
import {Field} from "../Field";
import {Circle} from "./base/Circle";
import {ICollider} from "./interfaces/ICollider";

export class EmptyCell implements IGameObject {
    private static BaseHp = 100;

    hp: Number;

    constructor(public collider: ICollider,
                public field: Field,
                public passability: boolean,
                public position: Vector)
    {
        this.hp = EmptyCell.BaseHp;
    }

    onClick(): void {
    }

    render(ctx: CanvasRenderingContext2D): void {

    }

    update(elapsed: number): void {
    }






}
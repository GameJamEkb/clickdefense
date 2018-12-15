import {IGameObject} from "../interfaces/IGameObject";
import {Vector} from "../base/Vector";
import {Field} from "../../Field"
import {drawCircle, drawRectangleCollider} from "../../utils/render";
import {ICollider} from "../interfaces/ICollider";
import {IReloader} from "../interfaces/IReloader";
import {GameConfig} from "../../constants/GameConfig";
import {Rectangle} from "../base/Rectangle";

export abstract class Tower implements IGameObject, IReloader {

    constructor(public collider: ICollider,
                public field: Field,
                public passability: boolean,
                public position: Vector,
                public hp: number,
                public maxHp: number,
                public timeout: number,
                public attackPower: number,
                public weaponRadius: number,
                public reloadTime: number,
                public reloadBar: boolean,
                public cost: number)
    { }

    abstract tryAttack(): boolean;
    abstract render(ctx: CanvasRenderingContext2D): void;
    onClick(): void {
        this.timeout -= 1
    }
    drawCollider(ctx: CanvasRenderingContext2D): void {
        drawRectangleCollider(ctx, this.position, this.collider as Rectangle);
    }

    update(elapsed: number): void {
        this.timeout -= elapsed;
        this.tryAttack();
    }

    isRealoded(): boolean {
        return this.timeout <= 0;
    }

    startReload(): void {
        this.timeout = this.reloadTime;
    }

    onOver(): void {
    }
}
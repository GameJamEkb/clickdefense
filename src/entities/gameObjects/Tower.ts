import {IGameObject} from "../interfaces/IGameObject";
import {Vector} from "../base/Vector";
import {Field} from "../../Field"
import {drawCircle} from "../../utils/render";
import {ICollider} from "../interfaces/ICollider";
import {IReloader} from "../interfaces/IReloader";

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
                public reloadBar: boolean)
    { }

    abstract tryAttack(): boolean;
    abstract render(ctx: CanvasRenderingContext2D): void;
    abstract onClick(): void;

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
}
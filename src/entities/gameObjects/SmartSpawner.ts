import {IGameObject} from "../interfaces/IGameObject";
import {Vector} from "../base/Vector";
import {Field} from "../../Field";
import {ICollider} from "../interfaces/ICollider";
import {IReloader} from "../interfaces/IReloader";
import {fillCircle} from "../../utils/render";
import {TowerFactory} from "../factories/TowerFactory";
import {EnemiesFactory} from "../factories/EnemiesFactory";
import {GameConfig} from "../../constants/GameConfig";
import {randomInt} from "../../utils/nums";

export enum EnemiesEnum {
    Stick, Ork, Skelet, Slime
}


export class SmartSpawner implements IGameObject, IReloader {

    static packs:Array<Array<EnemiesEnum> > = [
        [EnemiesEnum.Stick],
        [EnemiesEnum.Stick],
        [EnemiesEnum.Skelet],
        [EnemiesEnum.Skelet],
        [EnemiesEnum.Skelet],
        [EnemiesEnum.Skelet],
        [EnemiesEnum.Ork],
        [EnemiesEnum.Ork],
        [EnemiesEnum.Ork],
        [EnemiesEnum.Ork],
        [EnemiesEnum.Slime],

        [EnemiesEnum.Stick],
        [EnemiesEnum.Stick],
        [EnemiesEnum.Skelet],
        [EnemiesEnum.Skelet],
        [EnemiesEnum.Skelet],
        [EnemiesEnum.Skelet],
        [EnemiesEnum.Ork],
        [EnemiesEnum.Ork],
        [EnemiesEnum.Ork],
        [EnemiesEnum.Ork],
        [EnemiesEnum.Slime],

        [EnemiesEnum.Stick, EnemiesEnum.Stick, EnemiesEnum.Stick],
        [EnemiesEnum.Skelet, EnemiesEnum.Ork],
        [EnemiesEnum.Ork, EnemiesEnum.Ork, EnemiesEnum.Ork],
        [EnemiesEnum.Slime, EnemiesEnum.Slime],
        [EnemiesEnum.Stick, EnemiesEnum.Stick],
        [EnemiesEnum.Stick, EnemiesEnum.Slime],

        [EnemiesEnum.Skelet],
        [EnemiesEnum.Skelet],
    ];


    power: number = 0;
    nextId: number = 2;

    constructor(public collider: ICollider,
                public field: Field,
                public passability: boolean,
                public position: Vector,
                public hp: number,
                public maxHp: number,
                public timeout: number,
                public reloadTime: number,
                public reloadBar: boolean,
    )
    { }

    onClick(): void {
    }

    onOver(): void {
    }

    render(ctx: CanvasRenderingContext2D): void {
        ctx.drawImage(GameConfig.sprite, 32 * 2, 64 * 2, 32, 32, this.position.x - 16, this.position.y - 16, 32, 32);

        fillCircle(ctx, this.position.x, this.position.y, 15, "green");
    }

    static costOf(packId: number):number {
        let cost = 0;
        for (let e of SmartSpawner.packs[packId]) {
            switch (e) {
                case EnemiesEnum.Stick:
                    cost += 40 * 1.3;
                    break;
                case EnemiesEnum.Ork:
                    cost += 50 * 1;
                    break;
                case EnemiesEnum.Skelet:
                    cost += 50 * 1;
                    break;
                case EnemiesEnum.Slime:
                    cost += 250 * 0.8;
                    break;
            }
        }
        return cost;
    }

    spawnPack(packId: number) {
        for (let e of SmartSpawner.packs[packId]) {
            switch (e) {
                case EnemiesEnum.Stick:
                    this.field.addEnemy(EnemiesFactory.createBlueStick(this.position, this.field));
                    break;
                case EnemiesEnum.Ork:
                    this.field.addEnemy(EnemiesFactory.createOrk(this.position, this.field));
                    break;
                case EnemiesEnum.Skelet:
                    this.field.addEnemy(EnemiesFactory.createSkelet(this.position, this.field));
                    break;
                case EnemiesEnum.Slime:
                    this.field.addEnemy(EnemiesFactory.createSlime(this.position, this.field));
                    break;
            }
        }
    }

    trySpawn() {
        if (this.power >= SmartSpawner.costOf(this.nextId)) {
            this.spawnPack(this.nextId);
            this.power -= SmartSpawner.costOf(this.nextId);
            this.nextId = randomInt(0, SmartSpawner.packs.length);
        }
    }

    update(elapsed: number): void {
        this.power += elapsed * this.field.player.score / 9;
        this.trySpawn();
    }

    isRealoded(): boolean {
        return this.timeout <= 0;
    }

    startReload(): void {
        this.timeout = this.reloadTime;
    }
}
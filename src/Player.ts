import {GameConfig} from "./constants/GameConfig";
import {Game} from "./Game";
import {Field} from "./Field";
import {EventEmitter} from "./utils/event-emitter";

export class Player extends EventEmitter {

    startGoldCount: Array<number>;

    private _gold: number;

    score: number;


    constructor(
        public name: string,
        gold: number,
        public game: Game
    ) {
        super();
        this._gold = gold;
        this.score = gold;
        setTimeout(() => {
            this.emit('goldChange', gold);
        });
        this.startGoldCount = Array.from({length: 100});
    }

    get gold(): number {
        return this._gold;
    }

    set gold(value: number) {
        this.emit('goldChange', value);
        if (value < 0) {
            this.onDie();
        }
        let delta = Math.max(0, value - this._gold);
        if (delta > 1) {
            this.score += Math.max(0, value - this._gold);
        }
        this._gold = value;
        console.log(this.score);
    }

    onDie() {
        this.game.onLose();
    }

    onLevelStart(field: Field) {

    }

    onLevelComplete(field: Field) {
        this.startGoldCount[field.levelId] = Math.max(this.startGoldCount[field.levelId] | 0, GameConfig.StartGold, this.gold);
    }

}
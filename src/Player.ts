import {GameConfig} from "./constants/GameConfig";
import {Game} from "./Game";
import {Field} from "./Field";

export class Player {

    startGoldCount: Array<number>;

    private _gold: number;


    constructor(
        public name: string,
        gold: number,
        public game: Game
    ) {
        this._gold = gold;
        this.startGoldCount = Array.from({length: 100});
    }

    get gold(): number {
        return this._gold;
    }

    set gold(value: number) {
        if (value <= 0) {
            this.onDie();
        }
        this._gold = value;
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
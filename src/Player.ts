import {GameConfig} from "./constants/GameConfig";
import {Game} from "./Game";
import {Field} from "./Field";

export class Player {

    private _gold: number;


    constructor(
        public name: string,
        gold: number,
        public game: Game
    ) {
        this._gold = gold;
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

    onLevelComplete(field: Field) {

    }

}
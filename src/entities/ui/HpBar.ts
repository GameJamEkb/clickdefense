import {IGameObject} from "../interfaces/IGameObject";
import {fillRectangle} from "../../utils/render";
import {Field} from "../../Field";
import {GameConfig} from "../../constants/GameConfig";
import {Enemy} from "../gameObjects/Enemy";

export class HpBar {
    static Width = 30;
    static Height = 4;

    static render(ctx: CanvasRenderingContext2D, enemy: IGameObject, field: Field) {
        var life: number = Math.max(enemy.hp, 0) / enemy.maxHp;


        fillRectangle(
            ctx,
            enemy.position.x - field.cellSize / 2 + 2,
            enemy.position.y + 8,
            HpBar.Width * life,
            HpBar.Height,
            enemy instanceof Enemy && enemy.runAway ? "gold" : "red");

        fillRectangle(
            ctx,
            enemy.position.x + HpBar.Width * life - field.cellSize / 2 + 2,
            enemy.position.y + 8,
            HpBar.Width * (1 - life),
            HpBar.Height,
            "gray");
    }

}
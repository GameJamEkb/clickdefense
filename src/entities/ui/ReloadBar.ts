import {IGameObject} from "../interfaces/IGameObject";
import {fillRectangle} from "../../utils/render";
import {Field} from "../../Field";
import {GameConfig} from "../../constants/GameConfig";
import {IReloader} from "../interfaces/IReloader";

//TODO: Remove ts-ignore
export class ReloadBar {
    static Width = 30;
    static Height = 4;

    static render(ctx: CanvasRenderingContext2D, reloadable: IReloader, field: Field) {
        var life: number = Math.max(reloadable.timeout, 0) / reloadable.reloadTime;

        fillRectangle(
            ctx,
            // @ts-ignore
        reloadable.position.x - field.cellSize / 2 + 2,
            // @ts-ignore
        reloadable.position.y + 8,
            ReloadBar.Width * life,
            ReloadBar.Height,
            "blue");

        fillRectangle(
            ctx,
            // @ts-ignore
        reloadable.position.x + ReloadBar.Width * life - field.cellSize / 2 + 2,
            // @ts-ignore
        reloadable.position.y + 8,
            ReloadBar.Width * (1 - life),
            ReloadBar.Height,
            "gray");
    }

}
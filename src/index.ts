import './style.css';
import {Game} from "./Game";
import {TowerFactory} from "./entities/factories/TowerFactory";
import {GameConfig} from "./constants/GameConfig";
import {GameUI} from "./ui/GameUI";

const canvas = document.createElement('canvas');

canvas.width = GameConfig.CanvasWidth;
canvas.height = GameConfig.CanvasHeight;
canvas.classList.add('game-display');



const ctx = canvas.getContext('2d');
if (ctx == null) {
    throw Error("PNH");
}

document.body.appendChild(canvas);

const sprite = new Image(10, 10);
sprite.src = '/public/images/sprites.png';
sprite.onload = () => {
    GameConfig.sprite = sprite;

    const game = new Game(0);

    canvas.addEventListener('mousedown', function(event) {
        var x = event.pageX - canvas.offsetLeft,
            y = event.pageY - canvas.offsetTop;
        game.mouseClick(x, y);
    }, false);
    canvas.addEventListener('mouseover', function(event) {
        var x = event.pageX - canvas.offsetLeft,
            y = event.pageY - canvas.offsetTop;
        game.mouseOver(x, y);
    }, false);

    ctx.translate(GameConfig.GameFieldTranslateX, GameConfig.GameFieldTranslateY);
    let prevTime = Date.now();
    let times: Array<number> = [];
    let fps;
    const loop = () => {
        // @ts-ignore
        ctx.fillStyle = "black";

        ctx.fillRect(
            -GameConfig.GameFieldTranslateX,
            -GameConfig.GameFieldTranslateY,
            canvas.width - GameConfig.GameFieldTranslateX,
            canvas.height - GameConfig.GameFieldTranslateY + 10,
        );

        const currentTime = Date.now();
        const elapsed = (currentTime - prevTime) / 1000;
        prevTime = currentTime;
        requestAnimationFrame(loop);
        game.render(ctx);
        game.update(elapsed);

        const now = performance.now();
        while (times.length > 0 && times[0] <= now - 1000) {
            times.shift();
        }
        times.push(now);
        fps = times.length;

        ctx.fillStyle = 'greenyellow';
        ctx.fillText('' + fps, 20, 20);
    };

    loop();
};


const uiContainer = document.createElement('div');
uiContainer.classList.add('game-ui-container');
document.body.appendChild(uiContainer);

new GameUI(uiContainer);

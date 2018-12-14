import './style.css';
import {Game} from "./Game";
import {GameObjectFactory} from "./entities/factories/GameObjectFactory";
import {GameConfig} from "./constants/GameConfig";

const canvas = document.createElement('canvas');

canvas.width = GameConfig.CanvasWidth;
canvas.height = GameConfig.CanvasHeight;

const ctx = canvas.getContext('2d');
if (ctx == null) {
    throw Error("PNH");
}

document.body.appendChild(canvas);

const sprite = new Image(10,10);
sprite.src = '/public/images/sprites.png';
sprite.onload = () => {
    GameObjectFactory.sprite = sprite;

    const game = new Game(0);
    ctx.translate(GameConfig.GameFieldTranslateX, GameConfig.GameFieldTranslateY);
    let prevTime = Date.now();
    const loop = () => {
        // @ts-ignore
        ctx.clearRect(-GameConfig.GameFieldTranslateX, -GameConfig.GameFieldTranslateY, canvas.width - GameConfig.GameFieldTranslateX, canvas.height - GameConfig.GameFieldTranslateY);
        const currentTime = Date.now();
        const elapsed = (currentTime - prevTime) / 1000;
        prevTime = currentTime;
        requestAnimationFrame(loop);
        game.render(ctx);
        game.update(elapsed);
    };

    loop();
};


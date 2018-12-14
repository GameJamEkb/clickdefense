import './style.css';
import {Game} from "./Game";
import {GameObjectFactory} from "./entities/factories/GameObjectFactory";

const canvas = document.createElement('canvas');

canvas.width = 640;
canvas.height = 480;

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
    let prevTime = Date.now();
    const loop = () => {
        // @ts-ignore
        ctx.clearRect(0, 0, 640, 480);
        const currentTime = Date.now();
        const elapsed = (currentTime - prevTime) / 1000;
        prevTime = currentTime;
        requestAnimationFrame(loop);
        game.render(ctx);
        game.update(elapsed);
    };

    loop();
};


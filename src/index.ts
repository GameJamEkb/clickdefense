import './style.css';
import {Game} from "./Game";

const canvas = document.createElement('canvas');

canvas.width = 640;
canvas.height = 480;

const ctx = canvas.getContext('2d');
if (ctx == null) {
    throw Error("PNH");
}

document.body.appendChild(canvas);
const game = new Game(0);


const loop = () => {
    // @ts-ignore
    var elapsed = (new Date() - prevTime) / 1000;
    requestAnimationFrame(loop);
    game.render(ctx);
};

var prevTime = new Date();
loop();
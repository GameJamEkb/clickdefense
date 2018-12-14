import { Circle  } from './Objects/index';
import { rand } from "./Utils"
import {IStrategy, EatStrategy, CollisionStrategy, SmartCollisionStrategy} from "./Strategies";

export class Game {
    gameLoopId: number;
    addCirclesLoopId: number;
    prevTime: Date;
    objects: Circle[];
    strategy: IStrategy;
    width: number;
    height: number;
    ctx: CanvasRenderingContext2D;

    constructor(width: number, height: number, strategy: IStrategy, ctx: CanvasRenderingContext2D) {
        this.addCirclesLoopId = setInterval(() => this.addCircle(), 300);
        this.gameLoopId = setInterval(() => this.gameTick(), 20);
        this.strategy = strategy;
        this.width = width;
        this.height = height;
        this.objects = [];
        this.ctx = ctx;
    }

    addCustomCircle(x: number, y: number, r: number): void {
        this.objects.push(new Circle(x, y, r));
    }

    addCircle(): void {
        let r = rand(5, 40);
        this.addCustomCircle(rand(r, this.width - r), rand(r, this.height - r) / 2, r);
    }

    gameTick(): void {
        const cur = new Date();
        // @ts-ignore
        const elapsed = (cur - this.prevTime) / 1000;
        this.prevTime = cur;

        //Acceleration -> Speed
        this.objects.forEach(c => c.processAcceleration(elapsed));
        //Speed -> Movement
        this.objects.forEach(c => c.processSpeed(elapsed));
        //Check floor colision
        this.objects.forEach(c => c.processFloorColision(0, 0, canvas.width, canvas.height));
        //Collision control
        this.objects.forEach(
            (c1, index) => this.objects.slice(index + 1).forEach(
                c2 => c2.processCollision(c1, this.strategy)
            ));
        //Remove removed
        this.objects = this.objects.filter(c => !c.removed);

        drawGame(this, elapsed, this.ctx);
    }
}


function drawGame(game: Game, elapsed: number, ctx: CanvasRenderingContext2D) {
    // clear the canvas
    ctx.clearRect(0,0, canvas.width,canvas.height);
    for (var circle of game.objects) {
        drawCircle(ctx, circle);
    }
}

function drawCircle(ctx: CanvasRenderingContext2D, circle: Circle) {
    ctx.beginPath();
    ctx.fillStyle = circle.color;
    ctx.arc(circle.position.x, circle.position.y, circle.r, 0, 2*Math.PI);
    ctx.fill();
    //ctx.stroke();
    ctx.closePath();
}

console.log("Started!");

var canvas = <HTMLCanvasElement>document.getElementById("gameField");
var myGame = new Game(canvas.width, canvas.height, new CollisionStrategy(), canvas.getContext("2d"));
canvas.addEventListener('mousedown', function(event) {
    var x = event.pageX - canvas.offsetLeft,
        y = event.pageY - canvas.offsetTop;
    console.log("Click!");
    myGame.addCustomCircle(x, y, 40);
}, false);











"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./Objects/index");
var Utils_1 = require("./Utils");
var Strategies_1 = require("./Strategies");
var Game = /** @class */ (function () {
    function Game(width, height, strategy) {
        this.addCirclesLoopId = setInterval(this.addCircle, 300);
        this.gameLoopId = setInterval(this.gameTick, 20);
        this.strategy = strategy;
        this.width = width;
        this.height = height;
    }
    Game.prototype.addCircle = function () {
        var r = Utils_1.rand(5, 40);
        this.addMyCircle(Utils_1.rand(r, this.width - r), Utils_1.rand(r, this.height - r) / 2, r);
    };
    Game.prototype.addMyCircle = function (x, y, r) {
        this.objects.push(new index_1.Circle(x, y, r));
    };
    Game.prototype.gameTick = function () {
        var _this = this;
        var cur = new Date();
        // @ts-ignore
        var elapsed = (cur - prevTime) / 1000;
        this.prevTime = cur;
        //Acceleration -> Speed
        this.objects.forEach(function (c) { return c.processAcceleration(elapsed); });
        //Speed -> Movement
        this.objects.forEach(function (c) { return c.processSpeed(elapsed); });
        //Check floor colision
        this.objects.forEach(function (c) { return c.processFloorColision(0, 0, canvas.width, canvas.height); });
        //Collision control
        this.objects.forEach(function (c1, index) { return _this.objects.slice(index + 1).forEach(function (c2) { return c2.processCollision(c1, _this.strategy); }); });
        //Remove removed
        this.objects = this.objects.filter(function (c) { return !c.removed; });
        drawGame(this, elapsed);
    };
    return Game;
}());
exports.Game = Game;
function drawGame(game, elapsed) {
    // clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var _i = 0, _a = game.objects; _i < _a.length; _i++) {
        var circle = _a[_i];
        drawCircle(ctx, circle);
    }
}
function drawCircle(ctx, circle) {
    ctx.beginPath();
    ctx.fillStyle = circle.color;
    ctx.arc(circle.position.x, circle.position.y, circle.r, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
}
console.log("Started!");
var canvas = document.getElementById("gameField");
var ctx = canvas.getContext("2d");
var elemLeft = canvas.offsetLeft;
var elemTop = canvas.offsetTop;
var MyGame = new Game(canvas.width, canvas.height, new Strategies_1.EatStrategy());
canvas.addEventListener('mousedown', function (event) {
    var x = event.pageX - elemLeft, y = event.pageY - elemTop;
    MyGame.addMyCircle(x, y, 40);
}, false);

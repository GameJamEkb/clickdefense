"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vector_1 = require("./Vector");
var Consts = require("../Consts");
var Circle = /** @class */ (function () {
    function Circle(x, y, r, speed, color) {
        this.position = new Vector_1.Vector(x, y);
        this.speed = speed ? speed : new Vector_1.Vector(0, 0);
        this.color = color ? color : "hsla(" + Math.random() * 360 + ", 100%, 50%, 1)";
        this.acceleration = new Vector_1.Vector(0, Consts.g);
    }
    Circle.prototype.processAcceleration = function (elapsed) {
        this.speed = this.speed.add(this.acceleration.mult(elapsed));
    };
    Circle.prototype.processSpeed = function (elapsed) {
        this.position = this.position.add(this.speed.mult(elapsed));
    };
    Circle.prototype.processFloorColision = function (x1, y1, x2, y2) {
        if (this.position.x - this.r < x1) {
            this.speed.x = Math.abs(this.speed.x);
        }
        if (this.position.x + this.r > x2) {
            this.speed.x = -Math.abs(this.speed.x);
        }
        if (this.position.y - this.r < y1) {
            this.speed.y = Math.abs(this.speed.y);
        }
        if (this.position.y + this.r > y2) {
            this.speed.y = -Math.abs(this.speed.y);
        }
    };
    Circle.prototype.checkCollision = function (opponent) {
        return this.position.dec(opponent.position).length() < this.r + opponent.r;
    };
    Circle.prototype.processCollision = function (opponent, strategy) {
        if (this.removed || opponent.removed)
            return;
        if (this.checkCollision(opponent)) {
            strategy.process(this, opponent);
        }
    };
    return Circle;
}());
exports.Circle = Circle;

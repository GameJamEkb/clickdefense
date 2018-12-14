"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EatStrategy = /** @class */ (function () {
    function EatStrategy() {
    }
    EatStrategy.prototype.process = function (circle1, circle2) {
        var small, big, si;
        if (circle1.r < circle2.r) {
            small = circle1;
            big = circle2;
        }
        else {
            small = circle2;
            big = circle1;
        }
        big.r = Math.sqrt(big.r * big.r + small.r * small.r);
        small.removed = true;
    };
    return EatStrategy;
}());
exports.EatStrategy = EatStrategy;
var CollisionStrategy = /** @class */ (function () {
    function CollisionStrategy() {
    }
    CollisionStrategy.prototype.process = function (circle1, circle2) {
        var norm = circle1.position.dec(circle2.position).normalize();
        circle1.speed = norm.mult(circle1.speed.length());
        circle2.speed = norm.mult(-circle2.speed.length());
    };
    return CollisionStrategy;
}());
exports.CollisionStrategy = CollisionStrategy;

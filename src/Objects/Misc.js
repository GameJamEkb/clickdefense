"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function pifagor(x, y) {
    return Math.sqrt(x * x + y * y);
}
exports.pifagor = pifagor;
function checkCollision(circle1, circle2) {
    var r2 = circle1.r + circle2.r;
    var dist = pifagor(circle1.x - circle2.x, circle1.y - circle2.y);
    return r2 > dist;
}
exports.checkCollision = checkCollision;
function getSpeed(circle) {
    return pifagor(circle.speed.x, circle.speed.y);
}
exports.getSpeed = getSpeed;

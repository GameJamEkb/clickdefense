import {Circle} from "./Circle";

export function pifagor(x: number, y: number): number {
    return Math.sqrt(x * x + y * y);
}

export function checkCollision(circle1: Circle, circle2: Circle): boolean {
    var r2 = circle1.r + circle2.r;
    var dist = circle1.position.dec(circle2.position).length();
    return r2 > dist;
}

export function getSpeed(circle: Circle): number {
    return pifagor(circle.speed.x, circle.speed.y);
}



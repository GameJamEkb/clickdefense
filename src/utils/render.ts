import {ICollider} from "../entities/interfaces/ICollider";
import {Circle} from "../entities/base/Circle";
import {Vector} from "../entities/base/Vector";
import {Rectangle} from "../entities/base/Rectangle";

export function drawCircle(ctx: CanvasRenderingContext2D, x: number, y: number, r: number) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.stroke();
}


export function drawRectangle(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number) {
    ctx.beginPath();
    ctx.rect(x, y, width, height);
    ctx.stroke();
}

export function fillRectangle(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, fillStyle: string) {
    ctx.beginPath();
    ctx.fillStyle = fillStyle;
    ctx.fillRect(x, y, width, height);
}

export function fillCircle(ctx: CanvasRenderingContext2D, x: number, y: number, r: number, fillStyle: string) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fillStyle = fillStyle;
    ctx.fill();
}

export function drawCircleCollider(ctx: CanvasRenderingContext2D, position: Vector, circle: Circle) {
    drawCircle(
        ctx,
        position.x + circle.offsetX,
        position.y + circle.offsetY,
        circle.r
    );
}

export function drawRectangleCollider(ctx: CanvasRenderingContext2D, position: Vector, rectangle: Rectangle) {
    ctx.strokeStyle = 'red';
    drawRectangle(
        ctx,
        position.x - rectangle.width / 2 + rectangle.offsetX,
        position.y - rectangle.height / 2 + rectangle.offsetY,
        rectangle.width,
        rectangle.height);
}
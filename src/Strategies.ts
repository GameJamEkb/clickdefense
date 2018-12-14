import { Circle } from "./Objects/Circle";

export interface IStrategy {
    process(circle1: Circle, circle2: Circle): void;
}

export class EatStrategy implements IStrategy {
    process(circle1: Circle, circle2: Circle) {
        var small, big, si;
        if (circle1.r < circle2.r) {
            small = circle1;
            big = circle2;
        } else {
            small = circle2;
            big = circle1;
        }
        big.r = Math.sqrt(big.r * big.r + small.r * small.r);
        small.removed = true;
    }
}


export class CollisionStrategy implements IStrategy {
    process(circle1: Circle, circle2: Circle) {
        var norm = circle1.position.dec(circle2.position).normalize();
        circle1.speed = norm.mult(circle1.speed.length());
        circle2.speed = norm.mult(-circle2.speed.length());
    }
}


export class SmartCollisionStrategy implements IStrategy {
    process(circle1: Circle, circle2: Circle) {
        if (circle1.speed.length() > 100000) {
            circle1.speed = circle1.speed.normalize().mult(100);
        }
        if (circle2.speed.length() > 100000) {
            circle2.speed = circle2.speed.normalize().mult(100);
        }

        var m2 = circle1.r * circle1.r;
        var m1 = circle2.r *circle2.r;
        var v1 = circle1.speed;
        var v2 = circle2.speed;
        var x1 = circle1.position;
        var x2 = circle2.position;
        var p = x1.dec(x2);
        circle1.speed = v1.add(p.mult(2 *  m2).div(m1 + m2).div(p.length2()).mult(v2.dec(v1).vect(p)));
        circle1.speed = v2.dec(p.mult(2 *  m1).div(m1 + m2).div(p.length2()).mult(v2.dec(v1).vect(p)));



        var delta = circle1.r + circle2.r - p.length();
        var n = p.normalize();
        if (delta > 0) {
            circle1.position = circle1.position.add(n.mult(delta));
            circle2.position = circle2.position.add(n.mult(- delta));
            console.log(circle1, circle2);
        }


    }

    process_central(circle1: Circle, circle2: Circle) {
        var m1 = circle1.r * circle1.r;
        var m2 = circle2.r * circle2.r;
        var v1 = circle1.speed;
        var v2 = circle2.speed;
        circle1.speed = v1.mult(m1 - m2).add(v2.mult(2 * m2)).div(m1 + m2);
        circle2.speed = v2.mult(m1 - m2).add(v1.mult(2 * m1)).div(m1 + m2);
    }
}

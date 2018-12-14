import {GameObject} from "../src/entities/base/GameObject";
import {Vector} from "../src/entities/base/Vector";
import {bfs} from "../src/utils";
import {Cell} from "../src/entities/base/Cell";
import expect from "expect";

describe('Utils', () => {
    describe('bfs', () => {
        it('must find the path', () => {
            class TestNode extends GameObject {
                constructor(b: boolean) {
                    super(new Vector(0, 0), 0, b);
                }
            }

            const nodes = Array.from({length: 4})
                .map(() => Array.from({length: 4})
                    .map(() => new TestNode(true))
                );

            nodes[1][1].passability = false;
            nodes[2][2].passability = false;
            nodes[3][3].passability = false;

            const paths = bfs(nodes, new Cell(3, 2), new Cell(2, 3));
            expect(paths.length).toEqual(10);
        });

        it('must not find the path', () => {
            class TestNode extends GameObject {
                constructor(b: boolean) {
                    super(new Vector(0, 0), 0, b);
                }
            }

            const nodes = Array.from({length: 4})
                .map(() => Array.from({length: 4})
                    .map(() => new TestNode(true))
                );

            nodes[0][0].passability = false;
            nodes[1][1].passability = false;
            nodes[2][2].passability = false;
            nodes[3][3].passability = false;


            const paths = bfs(nodes, new Cell(3, 2), new Cell(2, 3));
            expect(paths.length).toEqual(0);
        });
    });
});
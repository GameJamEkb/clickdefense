import {IGameObject} from "../entities/interfaces/IGameObject";
import {Cell} from "../entities/base/Cell";
import {Vector} from "../entities/base/Vector";

function expand(nodes: Array<Array<IGameObject>>, node: Cell): Array<Cell> {
    const dx = [1, 0, -1, 0];
    const dy = [0, -1, 0, 1];
    const cells: Array<Cell> = [];

    for (let i = 0; i < dx.length; i++) {
        const x = node.x + dx[i];
        const y = node.y + dy[i];
        const _row = nodes[x];
        if (!_row) {
            continue;
        }

        const _node = nodes[x][y];
        if (_node && _node.passability) {
            cells.push(new Vector(x, y))
        }
    }

    return cells;
}

function hash(x: number, y: number): number {
    return x * 10000000 + y;
}

function hashCell(cell: Cell): number {
    return hash(cell.x, cell.y);
}


export function bfs(nodes: Array<Array<IGameObject>>, startNode: Cell, destNode: Cell): Array<Cell> {
    const visited: Map<number, boolean> = new Map();
    const parents: Map<number, Cell> = new Map();
    const points: Array<Cell> = [];
    points.push(startNode);
    visited.set(hashCell(startNode), true);
    while (points.length > 0) {
        const node = points.shift();
        // @ts-ignore
        if (node.eql(destNode)) {
            const path: Array<Cell> = [];

            // @ts-ignore
            let parent: Cell = node;
            while (parent) {
                path.push(parent);
                // @ts-ignore
                parent = parents.get(hashCell(parent))
            }

            path.pop();

            return path.reverse();
        }

        // @ts-ignore
        expand(nodes, node).forEach((child) => {
            const hash = hashCell(child);
            if (!visited.get(hash)) {
                points.push(child);

                // @ts-ignore
                parents.set(hash, node);
                visited.set(hash, true);
            }
        })
    }
    return [];
}
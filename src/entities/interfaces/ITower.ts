import {IGameObject} from "./IGameObject";
import {Vector} from "../base/Vector";
import {Field} from "../../Field"
import {drawCircle} from "../../utils/render";
import {ICollider} from "./ICollider";

export interface ITower {
    weaponRadius: number;
    attackPower: number;

    attack(): boolean
}
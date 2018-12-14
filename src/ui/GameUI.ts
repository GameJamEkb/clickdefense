import {TowerSelector} from "./TowerSelector";

export class GameUI {
    towerSelector: TowerSelector;
    constructor(container: HTMLElement) {
        this.towerSelector = new TowerSelector(container);
    }
}
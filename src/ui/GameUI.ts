import {TowerSelector} from "./TowerSelector";

export class GameUI {
    towerSelector: TowerSelector;
    private title: HTMLElement;
    constructor(container: HTMLElement) {
        this.towerSelector = new TowerSelector(container);

        this.title = document.createElement('div');
        this.title.classList.add('tower-selector-title')
        this.title.innerText = 'TOWERS';
        container.appendChild(this.title);
    }

    onGoldChange(gold: number) {
        this.title.innerText = ''+ gold;
    }
}
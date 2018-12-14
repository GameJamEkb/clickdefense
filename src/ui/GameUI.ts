import {TowerSelector} from "./TowerSelector";
import {EventEmitter} from "../utils/event-emitter";

export class GameUI extends EventEmitter {
    towerSelector: TowerSelector;
    private title: HTMLElement;
    constructor(container: HTMLElement) {
        super();
        this.towerSelector = new TowerSelector(container, (id: string) => this.emit('towerChange', id));

        this.title = document.createElement('div');
        this.title.classList.add('tower-selector-title')
        this.title.innerText = 'TOWERS';
        container.appendChild(this.title);
    }

    onGoldChange(gold: number) {
        this.title.innerText = ''+ gold;
    }
}
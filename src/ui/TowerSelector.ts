export class Tower {
    constructor(
        private icon: HTMLImageElement,
        public id: string
    ) {

    }
}

export class TowerSelector {
    private container = document.createElement('div');

    public towers: Array<Tower> = [];
    public activeTower?: Tower;

    constructor(parent: HTMLElement,) {
        this.container.classList.add('tower-selector-container');
        const title = document.createElement('div');
        title.classList.add('tower-selector-title')
        title.innerText = 'TOWERS';
        this.container.appendChild(title);

        parent.appendChild(this.container);

        this.towers = [
            new Tower(new Image(), '1'),
            new Tower(new Image(), '2'),
            new Tower(new Image(), '3'),
            new Tower(new Image(), '4'),
            new Tower(new Image(), '5'),
            new Tower(new Image(), '6')
        ];

        this.towers.forEach((tower) => {
            const selector = document.createElement('div');
            selector.classList.add('tower-selector');

            this.container.appendChild(selector);
        });
    }
}
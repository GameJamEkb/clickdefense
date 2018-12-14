export class Tower {
    constructor(
        public icon: string,
        public id: string
    ) {

    }
}

export class TowerSelector {
    private container = document.createElement('div');

    public towers: Array<Tower> = [];
    public activeTower?: Tower;

    constructor(parent: HTMLElement, public onTowerSelect: Function) {
        this.container.classList.add('tower-selector-container');

        parent.appendChild(this.container);

        this.towers = [
            new Tower('pink', 'Base'),
            new Tower('green', 'Splash'),
            new Tower('brown', 'Trap')
        ];

        this.towers.forEach((tower) => {
            const selector = document.createElement('div');
            selector.classList.add('tower-selector');
            selector.style.background = tower.icon;


            selector.onclick = () => {
                this.onTowerSelect(tower.id);
                this.activeTower = tower;

                Array.from(this.container.children).forEach(elem => elem.classList.remove('active'));
                selector.classList.add('active');
            };

            this.container.appendChild(selector);
        });
    }
}
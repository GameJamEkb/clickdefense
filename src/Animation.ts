export class Frame {
    constructor(public x: number, public y: number) {}
}

export class Animation {
    private counter: number;
    private ticker: number;
    constructor(
        public x: number,
        public y: number,
        public sprite: HTMLImageElement,

        public dx: number,
        public dy: number,
        public rate: number,
        public count: number,
        public initialFrame: number = 0
    ) {
        this.ticker = rate;
        this.counter = this.initialFrame;
    }

    update(elapsed: number) {
        this.ticker -= elapsed;
        if (this.ticker <= 0) {
            this.ticker = this.rate;
            this.counter++;
        }

        if (this.counter > this.count) {
            this.counter = 0;
        }
    }

    get frame(): Frame {
        return new Frame(this.x + this.dx * this.counter, this.y + this.dy * this.counter);
    }
}
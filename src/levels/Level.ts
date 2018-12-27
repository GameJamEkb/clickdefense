export class Level {
    constructor(
        public charField: string,
        public name: string,
        public nextLevelGenerator: () => Level | null
    ) { }
}
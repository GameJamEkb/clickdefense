export class GameConfig {
    static WidthInCells: number = 20;
    static HeightInCells: number = 15;
    static CellSize: number = 32;

    static StartGold: number = 500;

    static GameFieldTranslateX: number = 10;
    static GameFieldTranslateY: number = 10;

    static CanvasWidth: number = 800;
    static CanvasHeight: number = 600;

    static ShowEnemiesColliders: boolean = false;
    static ShowTowersColliders: boolean = true;

    static ShowEnemiesHitBars: boolean = false;
    static ShowTowersReloadBars: boolean = true;

    static sprite: HTMLImageElement;

    static PathFinderPixelDelta: number = 2;

}

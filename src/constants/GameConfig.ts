export class GameConfig {
    static WidthInCells: number = 20;
    static HeightInCells: number = 15;
    static CellSize: number = 32;

    static StartGold: number = 200;
    static GoldByClick: number = 1;

    static GameFieldTranslateX: number = 10;
    static GameFieldTranslateY: number = 10;

    static CanvasWidth: number = 800;
    static CanvasHeight: number = 600;

    static ShowEnemiesColliders: boolean = false;
    static ShowTowersColliders: boolean = true;

    static ShowEnemiesHitBars: boolean = true;
    static ShowTowersReloadBars: boolean = true;

    // Бандл
    static sprite: HTMLImageElement;

    static PathFinderPixelDelta: number = 2;

    // Понижение сложности при краже золота. 0 - без понижения. 1 - сложность вернётся при убийстве вора. 1+ - сложность понизится.
    static EasyCoeff = 0;

}

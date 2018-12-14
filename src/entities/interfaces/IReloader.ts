export interface IReloader {

    timeout: number
    reloadTime: number;

    onClick(): void
    update(elapsed: number): void
    isRealoded(): boolean
    startReload(): void
}
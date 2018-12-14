export class EventEmitter {
    private listeners: Map<string, Array<Function>> = new Map<string, Array<Function>>();

    on(event: string, cb: Function): void {
        if (this.listeners.has(event)) {
            this.listeners.get(event)!.push(cb);
        } else {
            this.listeners.set(event, [cb]);
        }
    }

    off(event: string, cb: Function): void {
        let listeners = this.listeners.get(event),
            index;

        if (listeners && listeners.length) {
            index = listeners.reduce((i, listener, index) => {
                return (typeof(listener) === 'function' && listener === cb) ?
                    i = index :
                    i;
            }, -1);

            if (index > -1) {
            }
        }
    }
    emit(event: string, ...args: any[]): void {
        let listeners = this.listeners.get(event);

        if (listeners && listeners.length) {
            listeners.forEach((listener) => {
                listener(...args);
            });
        }
    }
}
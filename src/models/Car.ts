export default class Car {
    brand: string;
    model: string;
    price: number;
    isRunning: boolean;

    constructor(brand: string, model: string, price: number) {
        this.brand = brand;
        this.model = model;
        this.price = price;
        this.isRunning = false;
    }

    run(): void {
        console.log('Running...');
        this.isRunning = true;
    }

    stop(): void {
        console.log('Stopped.');
        this.isRunning = false;
    }

    getStatus(): string {
        return this.isRunning ? 'running' : 'stopped';
    }
}
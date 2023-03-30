import * as p5 from "p5";

export class Ball {
    x : number;
    y : number;
    noiseX : number;
    noiseY : number;
    public constructor(x : number, y : number) {
        this.x = x;
        this.y = y;
        this.noiseX = x;
        this.noiseY = y;
    }

    public move(step : number, instance : p5) {
        this.x = instance.noise(this.noiseX) * instance.width;
        this.y = instance.noise(this.noiseY) * instance.height;
        this.noiseX += step;
        this.noiseY += step;
    }

    public seek(x : number, y : number) {
        //TODO seeking behavior
    }
}
import { Component, OnDestroy, OnInit } from '@angular/core';
import { hide } from '@popperjs/core';
import * as p5 from 'p5';
import { Ball } from 'src/app/models/Ball';
import { HandsetData } from 'src/app/models/HandsetData';

@Component({
  selector: 'app-p5background',
  templateUrl: './p5background.component.html',
  styleUrls: ['./p5background.component.css']
})
export class P5backgroundComponent implements OnInit, OnDestroy {

  private toggle = true;
  private p5! : p5;
  handsetData: HandsetData = HandsetData.getInstance()
  constructor() {
    window.onresize = this.onWindowResize;
  }

  ngOnInit() {
    this.createCanvas();
  }

  ngOnDestroy(): void {
    this.destroyCanvas();
  }

  private onWindowResize = (e : any) => {
    this.p5.resizeCanvas(this.p5.windowWidth, this.p5.windowHeight);
  }

  private createCanvas = () => {
    this.p5 = new p5(this.drawing);
  }

  private destroyCanvas = () => {
    console.log('destroying canvas');
    this.p5.noCanvas(); //I believe this to be redundant, remove() should destroy the canvas and stop the loop.
    this.p5.noLoop();
    this.p5.remove();
  }

  private drawing = function (p: any) {
    var balls: Ball[] = [];

    var amount = 10;
    var passDistance = 350;
    var r = 40;
    p.setup = () => {
      const canvas = p.createCanvas(p.windowWidth, p.windowHeight).parent('p5-canvas');
      canvas.position(0, 0);
      for (var i = 0; i < amount; i++) {
        balls.push(new Ball(p.random(0, p.width), p.random(0, p.height)))
      }
    };

    p.draw = () => {
      p.resizeCanvas(p.windowWidth, p.windowHeight)
      p.background(0, 0, 0, 0);
      p.fill(230);
      p.stroke(230);
      p.strokeWeight(4);
      p.ellipseMode(p.CENTER);
      for (var i = 0; i < amount; i++) {
        balls[i].move(0.0015, p);
        balls[i].seek(p.mouseX, p.mouseY)
      }
      for (var i = 0; i < amount; i++) {
        p.ellipse(balls[i].x, balls[i].y, r, r);
        for (var j = i + 1; j < amount; j++) {
          if (j < amount) {
            //Check other balls
            if ((p.dist(balls[i].x, balls[i].y, balls[j].x, balls[j].y)) < passDistance) {
              p.line(balls[i].x, balls[i].y, balls[j].x, balls[j].y)
            }
          }
        }
      }
    };

  };

}

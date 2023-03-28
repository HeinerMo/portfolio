import { Component, OnInit } from '@angular/core';
import { hide } from '@popperjs/core';
import * as p5 from 'p5';
import { Ball } from 'src/app/models/Ball';

@Component({
  selector: 'app-p5background',
  templateUrl: './p5background.component.html',
  styleUrls: ['./p5background.component.css']
})
export class P5backgroundComponent implements OnInit {

  private p5Instance: any;

  constructor() {
  }

  ngOnInit(): void {
    this.createCanvas();
  }

  private createCanvas() {
    this.p5Instance = new p5(this.sketch)
  }

  private sketch(p: any) {

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
      p.background(80, 80, 150);
      p.fill(117, 117, 209);
      p.stroke(117, 117, 209);
      p.strokeWeight(4);
      p.ellipseMode(p.CENTER);
      for (var i = 0; i < amount; i++) {
        balls[i].move(0.0015, p);
      }
      for (var i = 0; i < amount; i++) {
        p.ellipse(balls[i].x, balls[i].y, r, r);
        for (var j = i + 1; j < amount; j++) {
          if (j < amount) {
            //Chech other balls
            if ((p.dist(balls[i].x, balls[i].y, balls[j].x, balls[j].y)) < passDistance) {
              p.line(balls[i].x, balls[i].y, balls[j].x, balls[j].y)
            }
          }
        }

        //check mouse
        if ((p.dist(balls[i].x, balls[i].y, p.mouseX, p.mouseY)) < passDistance) {
          p.line(balls[i].x, balls[i].y, p.mouseX, p.mouseY)
        }
      }

      p.ellipse(p.mouseX, p.mouseY, 40, 40);
    };
  }
}

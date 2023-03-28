import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'app-p5background',
  templateUrl: './p5background.component.html',
  styleUrls: ['./p5background.component.css']
})
export class P5backgroundComponent implements OnInit {
  
  private p5Instance : any;
  

  constructor() { 

  }

  ngOnInit(): void {
      this.createCanvas();
  }

  private createCanvas() {
    this.p5Instance = new p5(this.sketch)
  }

  private sketch(p: any) {
    var angulo = 3;
    var xpos  = 0;
    var ypos = 0; 
    var velAngular = 0.0;
    var aceleracion = 0.0;
    var longitud = 150;

    p.setup = () => {
      const canvas = p.createCanvas(p.windowWidth, p.windowHeight).parent('p5-canvas');
      canvas.position(0, 0);
    };

    p.draw = () => {
      p.translate(p.width / 2, p.height / 2);
      p.background(40, 40, 100);
      p.fill(255);  
      p.stroke(255);  
      p.ellipseMode(p.CENTER);
      xpos = p.sin(angulo) * longitud;
      ypos = p.cos(angulo) * longitud;
      p.ellipse(xpos, ypos, 20, 20);
      p.line(0, 0, xpos, ypos);
      
      aceleracion = p.sin(angulo) * -0.01;
      
      angulo += velAngular;
      velAngular += aceleracion;
      velAngular *= 0.990;
    };
  }
}

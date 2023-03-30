import { Component, OnInit } from '@angular/core';
import { Technology } from 'src/app/models/Technology';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { HandsetData } from 'src/app/models/HandsetData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  technologies : Technology[] = []
  learning : Technology[] = []


  handsetData: HandsetData = HandsetData.getInstance()
  
  constructor() { 
    this.technologies.push(new Technology({text: "Android", logoPath:"assets/img/android_logo.png"}))
    this.technologies.push(new Technology({text: "Java", logoPath:"assets/img/java_logo.png"}))
    this.technologies.push(new Technology({text: "Python", logoPath:"assets/img/python_logo.png"}))
    this.technologies.push(new Technology({text: "Angular", logoPath:"assets/img/angular_logo.png"}))
    this.technologies.push(new Technology({text: "Bash", logoPath:"assets/img/bash_logo.png"}))
    this.technologies.push(new Technology({text: "Arduino", logoPath:"assets/img/arduino_logo.png"}))

    this.learning.push(new Technology({text: "Kotlin", logoPath:"assets/img/kotlin_logo.png"}))
  }

  ngOnInit(): void {
  }

}

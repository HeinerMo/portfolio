import { Component, OnInit } from '@angular/core';
import { Technology } from 'src/app/models/Technology';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  technologies : Technology[] = [];
  learning : Technology[] = [];
  
  constructor() { 
    this.technologies.push(new Technology({text: "Android Development with Android Studio", logoPath:"/assets/img/android_logo.png"}))
    this.technologies.push(new Technology({text: "Java Standalone Applications", logoPath:"/assets/img/java_logo.png"}))
    this.technologies.push(new Technology({text: "Python Scripting and Interaction with Arduino Boards.", logoPath:"/assets/img/python_logo.png"}))
    this.technologies.push(new Technology({text: "Angular Frontend Development", logoPath:"/assets/img/angular_logo.png"}))
    this.technologies.push(new Technology({text: "Linux", logoPath:"/assets/img/linux_logo.png"}))
    this.technologies.push(new Technology({text: "Arduino", logoPath:"/assets/img/arduino_logo.png"}))

    this.learning.push(new Technology({text: "Kotlin", logoPath:"/assets/img/"}))
    this.learning.push(new Technology({text: "Spring", logoPath:"/assets/img/"}))
    this.learning.push(new Technology({text: "DJango", logoPath:"/assets/img/"}))
  }

  ngOnInit(): void {
  }

}

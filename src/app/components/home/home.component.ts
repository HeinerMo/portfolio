import { Component, OnInit } from '@angular/core';
import { Technology } from 'src/app/models/Technology';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  technologies : Technology[] = []
  learning : Technology[] = []
  isPhone : boolean = false
  
  constructor(private breakpointObserver: BreakpointObserver) { 
    this.technologies.push(new Technology({text: "Android Development with Android Studio.", logoPath:"assets/img/android_logo.png"}))
    this.technologies.push(new Technology({text: "Java Standalone Applications.", logoPath:"assets/img/java_logo.png"}))
    this.technologies.push(new Technology({text: "Python Scripting to interact with Arduino Boards.", logoPath:"assets/img/python_logo.png"}))
    this.technologies.push(new Technology({text: "Angular Frontend Development.", logoPath:"assets/img/angular_logo.png"}))
    this.technologies.push(new Technology({text: "Bash Command Line Interface.", logoPath:"assets/img/bash_logo.png"}))
    this.technologies.push(new Technology({text: "Arduino Prototyping and Automation.", logoPath:"assets/img/arduino_logo.png"}))

    this.learning.push(new Technology({text: "Kotlin for Android Development.", logoPath:"assets/img/kotlin_logo.png"}))
  }

  ngOnInit(): void {
    this.breakpointObserver.observe(Breakpoints.Small).subscribe(result => {
      if (result.matches) {
        console.log('hello mf')
      }
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Technology } from 'src/app/models/Technology';
import { HandsetData } from 'src/app/models/HandsetData';

@Component({
  selector: 'app-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.css']
})
export class SoftwareComponent implements OnInit {

  technologies : Technology[] = []


  handsetData: HandsetData = HandsetData.getInstance()
  
  constructor() { 
    this.technologies.push(new Technology({text: "Android", logoPath:"assets/img/android_logo.png"}))
    this.technologies.push(new Technology({text: "Angular", logoPath:"assets/img/angular_logo.png"}))
    this.technologies.push(new Technology({text: "Arduino", logoPath:"assets/img/arduino_logo.png"}))
    this.technologies.push(new Technology({text: "Bash", logoPath:"assets/img/bash_logo.png"}))
    this.technologies.push(new Technology({text: "Bootstrap", logoPath:"assets/img/bootstrap_logo.png"}))
    this.technologies.push(new Technology({text: "C", logoPath:"assets/img/c_logo.png"}))
    this.technologies.push(new Technology({text: "C++", logoPath:"assets/img/cplusplus_logo.png"}))
    this.technologies.push(new Technology({text: "C#", logoPath:"assets/img/csharp_logo.png"}))
    this.technologies.push(new Technology({text: "HTML", logoPath:"assets/img/html_logo.png"}))
    this.technologies.push(new Technology({text: "Java", logoPath:"assets/img/java_logo.png"}))
    this.technologies.push(new Technology({text: "Javascript", logoPath:"assets/img/javascript_logo.png"}))
    this.technologies.push(new Technology({text: "MongoDb", logoPath:"assets/img/mongodb_logo.png"}))
    this.technologies.push(new Technology({text: "MySQL", logoPath:"assets/img/mysql_logo.png"}))
    this.technologies.push(new Technology({text: "PHP", logoPath:"assets/img/php_logo.png"}))
    this.technologies.push(new Technology({text: "Python", logoPath:"assets/img/python_logo.png"}))
    this.technologies.push(new Technology({text: "Typescript", logoPath:"assets/img/typescript_logo.png"}))
    this.technologies.push(new Technology({text: "Verilog", logoPath:"assets/img/verilog_logo.png"}))

  }

  ngOnInit(): void {
  }

}
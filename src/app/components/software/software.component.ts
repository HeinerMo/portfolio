import { Component, OnInit } from '@angular/core';
import { Technology } from 'src/app/models/Technology';
import { HandsetData } from 'src/app/models/HandsetData';
import { TechnologyService } from 'src/services/TechnologyService';

@Component({
  selector: 'app-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.css']
})
export class SoftwareComponent implements OnInit {

  usedTechnologies: Technology[] = []
  currentTechnologies: Technology[] = []
  handsetData: HandsetData = HandsetData.getInstance()

  constructor(private technologyService: TechnologyService) {

    this.loadTechnologies();
  }

  ngOnInit(): void {

  }


  loadTechnologies(): void {

    this.technologyService.getTechnologies().subscribe(
      (technologies: Technology[]) => {

        technologies.forEach(tech => {
          if (tech.currentlyUsed == "true") {
            this.currentTechnologies.push(tech);
          } else {
            this.usedTechnologies.push(tech);
          }
        })

      },
      (error) => {
        console.error('Failed to load articles', error);
      }
    )




  }

}
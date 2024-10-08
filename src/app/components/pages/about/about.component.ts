import { Component, OnInit } from '@angular/core';
import { Technology } from 'src/app/models/Technology';
import { HandsetData } from 'src/app/models/HandsetData';
import { TechnologyService } from 'src/services/TechnologyService';
import { PageDataService } from 'src/services/PageDataService';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
	usedTechnologies: Technology[] = []
	currentTechnologies: Technology[] = []
	handsetData: HandsetData = HandsetData.getInstance()
	title? : string
	intro?: string 
	certificationsTitle?: string
	inUseTitle?: string
	usedTitle?: string
	softwareTitle?: string
	softwareIntro?: string
	contactTitle?: string

	constructor(private technologyService: TechnologyService, private pageDataService : PageDataService) {

	}

	ngOnInit(): void {
		this.pageDataService.getValue('CertificationsTitle').subscribe(value => {
			this.certificationsTitle = value;
		})

		this.pageDataService.getValue('CurrentTechnologies').subscribe(value => {
			this.inUseTitle = value;
		})

		this.pageDataService.getValue('PreviousTechnologies').subscribe(value => {
			this.usedTitle = value;
		})

		this.pageDataService.getValue('AboutIntro').subscribe(value => {
		  this.intro = value;
		})

		this.pageDataService.getValue('AboutTitle').subscribe(value => {
		  this.title = value;
		})

		this.pageDataService.getValue("ContactTitle").subscribe(value => {
		  this.contactTitle = value;
		})


		this.loadTechnologies();
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

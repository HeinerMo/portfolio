import { Component, OnInit } from '@angular/core';
import { HandsetData } from 'src/app/models/HandsetData';
import { Project } from 'src/app/models/Project';
import { PageDataService } from 'src/services/PageDataService';
import { SiteConfig } from 'src/services/SiteConfig';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  public projects: Project[] = []
  handsetData: HandsetData = HandsetData.getInstance()
  title? : string
  intro? : string

  constructor(private pageDataService: PageDataService, public siteConfig: SiteConfig) {
    this.projects.push(new Project({ 
      name: 'TC-645 Website', 
      descriptionEN: "A website is designed and developed for the TC-645 community work project at the University of Costa Rica. The website follows the visual identity standards of the university and complies with the regulations established therein.",
      descriptionES: "Una página web para el trabajo comunal TC-645 de la Universidad de Costa Rica. La página sigue los estándares de identidad visual de la UCR y cumple con las regulaciones tablecidas en ellos.",
      repositoryUrl: 'https://tcu645.vercel.app/'}))
    this.projects.push(new Project({ 
      name: 'Task Tracker',
      descriptionEN: "A simple TO-DO app. A clasicc of the Junior Developer.", 
      descriptionES: "Una aplicación de lista de tareas. Un clásico del desarrollador Junior",
      repositoryUrl: 'https://github.com/HeinerMo/TaskTracker'}))
    this.projects.push(new Project({ 
      name: 'Questionnaire System', 
      descriptionEN: "A system that allows an organization to apply surveys to their employees and people outside the company's network.", 
      descriptionES: "Un sistema de cuestionarios que permite a la organización aplicar encuestas a empleados y a terceros",
      repositoryUrl: 'https://github.com/HeinerMo/Questionnaires'}))
  }

  ngOnInit(): void {
    this.pageDataService.getValue("SoftwareProjectsIntro").subscribe(value => {
      this.intro = value; 
    })

    this.pageDataService.getValue("SoftwareProjectsTitle").subscribe(value => {
      this.title = value;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { HandsetData } from 'src/app/models/HandsetData';
import { Project } from 'src/app/models/Project';
import { PageDataService } from 'src/services/PageDataService';

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

  constructor(private pageDataService: PageDataService) {
    this.projects.push(new Project({ name: 'TC-645 Website', description: "A website is designed and developed for the TC-645 community work project at the University of Costa Rica. The website follows the visual identity standards of the university and complies with the regulations established therein.", repositoryUrl: 'https://tcu645.vercel.app/'}))
    this.projects.push(new Project({ name: 'Task Tracker', description: "Task Tracker is a simple android application that aims to help the users keep a list of all the tasks they should complete while being as simple and non intrusive as possible.", repositoryUrl: 'https://github.com/HeinerMo/TaskTracker'}))
    this.projects.push(new Project({ name: 'Questionnaire System', description: "A system that allows an organization to apply surveys to their employees and people outside the company's network.", repositoryUrl: 'https://github.com/HeinerMo/Questionnaires'}))
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

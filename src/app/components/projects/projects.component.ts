import { Component, OnInit } from '@angular/core';
import { HandsetData } from 'src/app/models/HandsetData';
import { Project } from 'src/app/models/Project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  public projects: Project[] = []
  handsetData: HandsetData = HandsetData.getInstance()

  constructor() {
    this.projects.push(new Project({ name: 'Task Tracker', description: "Task Tracker is a simple android application that aims to help the users keep a list of all the tasks they should complete while being as simple and non intrusive as possible.", repositoryUrl: 'https://github.com/HeinerMo/TaskTracker', icon: 'assets/projects/tasktracker/task_tracker_icon.png' }))
    this.projects.push(new Project({ name: 'Questionnaire System', description: "A system that allows an organization to apply surveys to their employees and people outside the company's network.", repositoryUrl: 'https://github.com/HeinerMo/Questionnaires', icon: 'assets/projects/questionnaire/questionnaire.png' }))
  }

  ngOnInit(): void {
  }

}

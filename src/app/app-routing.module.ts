import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SoftwareComponent } from './components/software/software.component';
import { PhotographyComponent } from './components/photography/photography.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {path: 'navbar-component', component: NavbarComponent}
    ]
  }
  ,{ path: 'app-home', component: HomeComponent }
  ,{ path: 'app-projects', component: ProjectsComponent }
  ,{ path: 'app-contact', component: ContactComponent}
  ,{ path: 'app-software', component: SoftwareComponent}
  ,{ path: 'app-photography', component: PhotographyComponent}
  ,{ path: '**', component: HomeComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

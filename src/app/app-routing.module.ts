import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/pages/contact/contact.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NavbarComponent } from './components/pages/navbar/navbar.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { PhotographyComponent } from './components/pages/photography/photography.component';
import { AboutComponent } from './components/pages/about/about.component';

const routes: Routes = [
  {
    path: 'app-home',
    component: HomeComponent,
    children: [
      {path: 'navbar-component', component: NavbarComponent}
    ]
  }
  ,{ path: 'app-home', component: HomeComponent }
  ,{ path: 'app-projects', component: ProjectsComponent }
  ,{ path: 'app-contact', component: ContactComponent}
  ,{ path: 'app-photography', component: PhotographyComponent}
  ,{ path: 'app-about', component: AboutComponent}
  ,{ path: '**', redirectTo: 'app-home' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';

  import { AppRoutingModule } from './app-routing.module';
  import { AppComponent } from './app.component';
  import { HomeComponent } from './components/pages/home/home.component';
  import { NavbarComponent } from './components/pages/navbar/navbar.component';
  import { ProjectsComponent } from './components/pages/projects/projects.component';
  import { ContactComponent } from './components/pages/contact/contact.component';
  import { MatButtonModule, MatDialogModule, MatToolbarModule } from '@angular/material';
  import { MatSidenavModule } from '@angular/material/sidenav';
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
  import { MatIconModule } from '@angular/material/icon';
  import { MatListModule } from '@angular/material/list';
  import { SoftwareComponent } from './components/pages/software/software.component';
  import { HttpClientModule } from '@angular/common/http';
  import { CommonModule } from '@angular/common';
  import { PhotographyComponent } from './components/pages/photography/photography.component';
  import { ImageModalComponent } from './components/reusable/image-modal/image-modal.component';

  @NgModule({
    declarations: [
      AppComponent,
      HomeComponent,
      NavbarComponent,
      ProjectsComponent,
      ContactComponent,
      SoftwareComponent,
      PhotographyComponent,
      ImageModalComponent,
    ],
    imports: [
      BrowserAnimationsModule,
      BrowserModule,
      AppRoutingModule,
      MatToolbarModule,
      MatSidenavModule,
      MatIconModule,
      MatListModule,
      HttpClientModule,
      CommonModule,
      MatDialogModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
    
  })
  export class AppModule { }

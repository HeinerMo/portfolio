import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Technology } from 'src/app/models/Technology';
import { SiteConfig } from './SiteConfig';

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {
  constructor(private http: HttpClient, private config: SiteConfig) { }

  getTechnologies(): Observable<Technology[]> {
      return this.http.get<Technology[]>('./assets/data/Technologies.json');
  }
}
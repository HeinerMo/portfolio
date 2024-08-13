import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { SiteConfig } from './SiteConfig';

@Injectable({
    providedIn: 'root'
})
export class PageDataService {

    constructor(private http: HttpClient, private config: SiteConfig) {
    }

    getValue(key: string): Observable<string> {
        const languageFile = this.config.getLanguage() === 'es'
            ? './assets/data/pageData-ES.json'
            : './assets/data/pageData-EN.json';

        return this.http.get<any>(languageFile).pipe(
            map(data => data[key] || '')
        );
    }
}
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
    providedIn: 'root'
})
export class SiteConfig {

    private constructor(private cookieService: CookieService) {
        this.detectLanguage();
        console.log(this.getLanguage())
    }

    public setLanguage(lang: string) {
        this.cookieService.set('lang', lang);
    }

    public getLanguage(): string {
        return this.cookieService.get("lang");
    }

    private detectLanguage() {
        var lang = this.getLanguage();
        if (lang === "") {
            var lang = navigator.language.split('-')[0].toLowerCase();
            this.setLanguage(lang);
        }
    }

    public toggleLanguage() {
        var current = this.getLanguage();

        if (current === "es") {
            this.setLanguage("en")
        } else {
            this.setLanguage("es")
        }
    }
}

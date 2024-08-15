import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
	providedIn: 'root'
})
export class SiteConfig {

	private constructor(private cookieService: CookieService) {
		this.detectLanguage();
	}

	public setLanguage(lang: string) {

		if (lang === "es" || lang === "en") {
			this.cookieService.set('lang', lang);
			document.documentElement.lang = lang;
		} else {
			this.cookieService.set('en', lang);
			document.documentElement.lang = 'en';
		}
	}

	public getLanguage(): string {
		return this.cookieService.get("lang");
	}

	private detectLanguage() {
		var lang = this.getLanguage();
		if (lang === "") {
			lang = navigator.language.split('-')[0].toLowerCase();
		}
		this.setLanguage(lang);
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

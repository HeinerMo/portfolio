export class Technology {
    
    name?: String
    logoPath?: String
    url?: String
    currentlyUsed?: String

    constructor({name, logoPath, url, currentlyUsed}: {name?: String, logoPath?: String, url: String, currentlyUsed: String}) {
        this.name = name
        this.logoPath = logoPath
        this.url = url;
        this.currentlyUsed = currentlyUsed;
    }
}
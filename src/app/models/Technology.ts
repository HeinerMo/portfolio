export class Technology {
    
    text?: String
    logoPath?: String

    constructor({text, logoPath}: {text?: String, logoPath?: String}) {
        this.text = text
        this.logoPath = logoPath
    }
}
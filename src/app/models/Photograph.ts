export class Photograph {

    path?: String
    details?: String[]
    date?: String
    title?: String
    constructor({ path, details, date, title }: { path?: String, details?: String[], date?: String, title?: String }) {
        this.details = details
        this.path = path
        this.date = date
        this.title = title
    }
}
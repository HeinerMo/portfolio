export class Photograph {

    path?: String
    details?: String[]
    cameraDetails?: String
    date?: String
    constructor({ path, details, cameraDetails, date }: { path?: String, details?: String[], cameraDetails?: String, date?: String }) {
        this.details = details
        this.cameraDetails = cameraDetails
        this.path = path
        this.date = date
    }
}
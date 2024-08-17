export class Project {
    
    name?: String
    descriptionEN?: String
    descriptionES? : String
    repositoryUrl?: String
    icon?: String
    constructor({name, descriptionEN, descriptionES, icon, repositoryUrl}: {name?: String, descriptionEN?: String, descriptionES?: String, icon?: String, repositoryUrl?: String}) {
        this.descriptionEN = descriptionEN
	this.descriptionES = descriptionES
        this.repositoryUrl = repositoryUrl
        this.name = name
        this.icon = icon
    }
}

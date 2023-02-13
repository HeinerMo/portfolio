export class Project {
    
    name?: String
    description?: String
    repositoryUrl?: String
    icon?: String
    constructor({name, description, icon, repositoryUrl}: {name?: String, description?: String, icon?: String, repositoryUrl?: String}) {
        this.description = description
        this.repositoryUrl = repositoryUrl
        this.name = name
        this.icon = icon
    }
}
import { makeObservable, makeAutoObservable, observable, action } from "mobx"
import agent from "../../app/api/agent";

export default class ProjectStore {
    projectList
    selectedProject

    constructor() {
        makeAutoObservable(this)
    }

    loadProjects = async () => {
        try {
            const result = await agent.projects.list()
            this.projectList = result;

        } catch (error) {
            console.log(error)
        }
    }

}
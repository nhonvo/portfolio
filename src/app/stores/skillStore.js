import { makeAutoObservable } from "mobx"
import agent from "../../app/api/agent";

export default class SkillStore {
    skillList = []
    selectedSkill

    constructor() {
        makeAutoObservable(this)
    }

    loadSkills = async () => {
        try {
            const result = await agent.skills.list()
            this.skillList = result;

        } catch (error) {
            console.log(error)
        }
    }

}
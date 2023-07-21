import { makeAutoObservable } from "mobx"
import agent from "../../app/api/agent";

export default class AchievementStore {
    achievementList = []
    selectedAchievement

    constructor() {
        makeAutoObservable(this)
    }

    loadAchievements = async () => {
        try {
            const result = await agent.achievements.list()
            this.achievementList = result;

        } catch (error) {
            console.log(error)
        }
    }
}
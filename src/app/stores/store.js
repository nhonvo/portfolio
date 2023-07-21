import { createContext, useContext } from "react";
import ProjectStore from "./projectStore";
import MeStore from "../stores/meStore";
import AchievementStore from "../stores/achievementStore";
import SkillStore from "../stores/skillStore";
import EmailStore from "../stores/emailStore";

export const store = {
    projectStore: new ProjectStore(),
    meStore: new MeStore(),
    achievementStore: new AchievementStore(),
    skillStore: new SkillStore(),
    emailStore: new EmailStore(),
}

export const StoreContext = createContext(store)

export function useStore() {
    return useContext(StoreContext)
}
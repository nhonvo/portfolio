import { createContext, useContext } from "react";
import ProjectStore from "./projectStore";
import MeStore from "./meStore";
import AchievementStore from "./achievementStore";
import SkillStore from "./skillStore";
import FileStore from "./fileStore";

export const store = {
    projectStore: new ProjectStore(),
    meStore: new MeStore(),
    achievementStore: new AchievementStore(),
    skillStore: new SkillStore(),
    fileStore: new FileStore()
}

export const StoreContext = createContext(store)

export function useStore() {
    return useContext(StoreContext)
}
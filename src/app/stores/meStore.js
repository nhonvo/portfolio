import { makeAutoObservable } from "mobx"
import agent from "../../app/api/agent";

export default class MeStore {
    me = null
    selectedMe

    constructor() {
        makeAutoObservable(this)
    }

    loadMes = async () => {
        try {
            const result = await agent.mes.me()
            this.me = result;
        } catch (error) {
            console.log(error)
        }
    }

}
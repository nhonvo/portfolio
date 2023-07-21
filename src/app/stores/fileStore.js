import { makeAutoObservable } from "mobx"
import agent from "../api/agent";

export default class FileStore {
    fileList = []
    selectedFile

    constructor() {
        makeAutoObservable(this)
    }

    loadFiles = async (name) => {
        try {
            const result = await agent.files.list(name);
            this.fileList = result;

        } catch (error) {
            console.log(error)
        }
    }
}
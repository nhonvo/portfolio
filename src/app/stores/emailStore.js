import { makeAutoObservable } from "mobx"
import agent from "../../app/api/agent";
import { toast } from "react-toastify";

export default class EmailStore {
    emailList = []
    selectedEmail

    constructor() {
        makeAutoObservable(this)
    }

    send = async (email, name, content) => {
        try {
            const result = await agent.emails.send(email, name, content);
            this.emailList = result;
            toast.success('Email sent successfully!', {
                position: toast.POSITION.TOP_RIGHT
            });
        } catch (error) {
            console.log(error);
            toast.error('Error sending email. Please try again.', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    };
}
import TaskData from "../shared/model/TaskData";
import PhaseData from "../shared/model/PhaseData";
import Startup from "./Startup";
import axios from "axios";

export default class Retrieve{

    public static startUp(){
        const foundation = new PhaseData("Foundation", [
            new TaskData("Setup virtual office"),
            new TaskData("Set mission & vision"),
            new TaskData("Select business name"),
            new TaskData("Buy domains")
        ])

        const discovery = new PhaseData("Discovery", [
            new TaskData("Create roadmap"),
            new TaskData("Competitor analysis")
        ])

        const delivery = new PhaseData("Delivery", [
            new TaskData("Release marketing website"),
            new TaskData("Release MVP")
        ])
        return new Startup("My startup", [
            foundation,
            discovery,
            delivery
        ]);
    }

    public static async randomFacts(){
        try {
            const res = await axios.get('https://uselessfacts.jsph.pl/random.json')
            return res.data.text;
        }catch (e) {
            console.log("Random facts retrieving error", e);
            return "";
        }
    }
}
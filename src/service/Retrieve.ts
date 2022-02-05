import TaskData from "../model/TaskData";
import PhaseData from "../model/PhaseData";

export default class Retrieve{

    public static phases(){
        const foundation = new PhaseData("Foundation", [
            new TaskData("Setup virtual office"),
            new TaskData("Set mission & vision"),
            new TaskData("Select business name"),
            new TaskData("Buy domains")
        ])
        foundation.isCompleted = true; //TODO

        const discovery = new PhaseData("Discovery", [
            new TaskData("Create roadmap"),
            new TaskData("Competitor analysis")
        ])
        discovery.tasks[0].isCompleted = true;

        const delivery = new PhaseData("Delivery", [
            new TaskData("Release marketing website"),
            new TaskData("Release MVP")
        ])
        return [
            foundation,
            discovery,
            delivery
        ]
    }

}
import TaskData from "./TaskData";

export default class PhaseData {
    public name: string
    public isCompleted: boolean = false;
    public tasks: TaskData[];
    constructor(name: string, tasks: TaskData[]) {
        this.name = name;
        this.tasks = tasks;
    }


}

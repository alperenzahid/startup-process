export default class TaskData {
    public name: string
    public taskIndex: number = -1;
    public phaseIndex: number = -1;
    public isCompleted: boolean = false;
    public isDisabled: boolean = true;
    constructor(name: string) {
        this.name = name;

    }

}

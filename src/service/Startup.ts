import PhaseData from "../shared/model/PhaseData";

export default class Startup{
    public name: string;
    public phases: PhaseData[];

    constructor(name: string, phases: PhaseData[]) {
        this.name = name
        this.initializeIndexes(phases);
        Startup.unlockPhase(phases[0]);
        this.phases = phases;
    }

    private static unlockPhase(phase: PhaseData) {
        phase.tasks.forEach(t => t.isDisabled = false);
    }

    private initializeIndexes(phases: PhaseData[]) {
        phases.forEach((p, phaseIndex) => {
            p.id = phaseIndex
            p.tasks.forEach((t, taskIndex) => {
                t.taskIndex = taskIndex;
                t.phaseIndex = phaseIndex;
            })
        })
    }
}
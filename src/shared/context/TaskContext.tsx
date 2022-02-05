import {createContext, useContext, useState} from "react";
import Retrieve from "../../service/Retrieve";
import Startup from "../../service/Startup";
import TaskData from "../model/TaskData";

const StartupContext = createContext<any>(undefined)

function StartupProvider({children}: any) {
    const initialData: Startup = Retrieve.startUp();
    const [startUp, _setStartUp] = useState<Startup>(initialData);
    const updateStartUp = (task: TaskData, isCompleted: true)=>{
        const newStartup = new Startup(startUp.name, startUp.phases);
        newStartup.phases[task.phaseIndex].tasks[task.taskIndex].isCompleted = isCompleted;

        for(let i=0; i<newStartup.phases.length; i++){
            const isPhaseCompleted = !newStartup.phases[i].tasks.find(t => !t.isCompleted);
            newStartup.phases[i].isCompleted = isPhaseCompleted;
            const isNotLastStep = i+1 < newStartup.phases.length;
            if(isNotLastStep){
                const isNextStepDisabled = newStartup.phases[i+1].tasks[0].isDisabled;
                if(isNextStepDisabled){
                    newStartup.phases[i+1].tasks.forEach(t => {
                        t.isDisabled = !isPhaseCompleted;
                        t.isCompleted = false;
                    })
                }else if(!isPhaseCompleted){
                    newStartup.phases[i+1].tasks.forEach(t => {
                        t.isDisabled = !isPhaseCompleted;
                        t.isCompleted = false;
                    })
                }
            }
        }

        _setStartUp(newStartup);
    }
    return (
        <StartupContext.Provider value={{startUp, updateStartUp}}>
            {children}
        </StartupContext.Provider>
    )
}

export function useStartup():{startUp: Startup, updateStartUp: Function} {
    const ret = useContext(StartupContext);
    if (!ret) {
        throw new Error(`use method must be used within TasksProvider`)
    }
    return ret;
}

export {StartupProvider}
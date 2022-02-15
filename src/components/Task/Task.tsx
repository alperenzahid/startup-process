import TaskData from "../../shared/model/TaskData";
import {useStartup} from "../../shared/context/TaskContext";
import {useCallback} from "react";


export default function Task({data, tId}:{data: TaskData, tId: any}){
    const {updateStartUp} = useStartup();
    const onTaskStatusChange = useCallback((e: any)=>{
        updateStartUp(data, e.target.checked);
    },[data, updateStartUp])
    
    return (
        <div className="py-2">
            <div className="flex items-center">
                <input
                    className="mr-2 cursor-pointer h-4 w-4" checked={data.isCompleted}
                    type="checkbox" value={data.name} id={tId} disabled={data.isDisabled} onChange={onTaskStatusChange}/>
                <label className="form-check-label inline-block text-gray-800" htmlFor={tId}>
                    {data.name}
                </label>
            </div>
        </div>
    )
}
import TaskData from "../../shared/model/TaskData";
import {useStartup} from "../../shared/context/TaskContext";


export default function Task({data}:{data: TaskData}){

    const {updateStartUp} = useStartup();
    return (
        <div className="py-2">
            <div className="flex items-center">
                <input
                    className="mr-2 cursor-pointer h-4 w-4" checked={data.isCompleted}
                    type="checkbox" value={data.name} id="checkTask" disabled={data.isDisabled} onChange={(e)=>{
                        console.log(e.target.checked)
                        updateStartUp(data, e.target.checked);
                }}/>
                <label className="form-check-label inline-block text-gray-800" htmlFor="checkTask">
                    {data.name}
                </label>
            </div>
        </div>
    )
}
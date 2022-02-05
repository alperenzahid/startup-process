import TaskData from "../../model/TaskData";


export default function Task({data}:{data: TaskData}){
    return (
        <div className="py-2">
            <span>Select</span>
            <span>{data.name}</span>
        </div>
    )
}
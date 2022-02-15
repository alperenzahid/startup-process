import PhaseData from "../../shared/model/PhaseData";
import Task from "../Task/Task";
import {CheckIcon} from "@heroicons/react/solid";


export default function Phase({data, index}:{data:PhaseData, index:number}){
    return (
        <div className="py-3">
           <div className="py-2 flex items-center">
               <span className="bg-black text-white px-3 py-2 rounded-full">{index+1}</span>
               <span className="px-2 text-2xl font-bold">{data.name}</span>
               {data.isCompleted && <CheckIcon className="h-16 pl-5"/>}
           </div>
            <div>
                {data.tasks.map((d,index) => {
                    return <Task key={index} tId={`${index} ${d.name}`} data={d}/>
                })}
            </div>
        </div>
    )
}
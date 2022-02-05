import PhaseData from "../../model/PhaseData";
import Task from "../Task/Task";


export default function Phase({data, index}:{data:PhaseData, index:number}){
    return (
        <div className="py-3">
           <div className="py-2">
               <span className="bg-black text-white px-3 py-2 rounded-full">{index+1}</span>
               <span className="px-2 text-2xl font-bold">{data.name}</span>
               {data.isCompleted && <span>Checked Icon</span>}
           </div>
            <div>
                {data.tasks.map(d => {
                    return <Task data={d}/>
                })}
            </div>
        </div>
    )
}
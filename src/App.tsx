import React from 'react';
import './App.css';
import Phase from "./components/Phase/Phase";
import {useStartup} from "./shared/context/TaskContext";

function App() {

  const {startUp} = useStartup();


  return (
      <div className="flex justify-center py-10">
          <div>
              <h1 className="text-2xl font-bold pb-5">
                  {startUp.name} progress
              </h1>
              {
                  startUp.phases ? <div>
                      {
                          startUp.phases.map((d,index )=> {
                              return <Phase key={`Phase${index}`} data={d} index={index} />
                          })
                      }
                  </div> : <div>
                      There is no phase data
                  </div>
              }
          </div>
      </div>
  )
}

export default App;

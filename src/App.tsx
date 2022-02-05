import React, {useEffect, useState} from 'react';
import './App.css';
import Retrieve from "./service/Retrieve";
import PhaseData from "./model/PhaseData";
import Phase from "./components/Phase/Phase";

function App() {

  const [data, setData] = useState<PhaseData[]>();
  useEffect(()=>{
      const _data = Retrieve.phases();
      setData(_data);
  },[])
  return (
      <div className="flex justify-center py-10">
          <div>
              <h1 className="text-2xl font-bold pb-5">
                  My startup progress
              </h1>
              {
                  data ? <div>
                      {
                          data.map((d,index )=> {
                              return <Phase data={d} index={index} />
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

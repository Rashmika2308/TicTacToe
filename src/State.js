import { useState } from "react";
function State1()
{
    const name4= useState ("Rash");
    const name1=useState("yash");
    const name3=useState("poni");
    return(
        <>
        <h1 style={{textAlign:'left'}}>UseState properties</h1>
        <h1 style={{textAlign:'left'}}>hello world {name1}</h1>
        <h2 style={{textAlign:'left'}}>hello world {name3}</h2>
        <h3 style={{textAlign:'left'}}>hello world {name4}</h3>
        </>
    )
}
function State2()
{
    const [cycle,setcycle]=useState(
        {
           monkey:"vijay",
           monkey1:"nithiya",
           monkey2:"rash"
        }
    );
    const updateCar=()=>{
        setcycle(previouState=>{
            return {
                ...previouState,monkey2:"yash"
            }
        })
    }
    return(
        <div>
        <h1>State properties</h1>
        <p>hello monkey {cycle.monkey1} how are you {cycle.monkey2}</p>
        <button type="button" onClick={updateCar}>Change</button>
        </div>
    )
}
export {State1,State2};






















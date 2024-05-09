import { useEffect, useState } from "react";

function Countone()
{
    const [count,setcount]=useState(0);
    const [calcu,setCalcu]=useState(0);
    useEffect(()=>{
        setCalcu(()=>count*2);
    });
    return(
        <>
        <p>count:{count}</p>
        <button onClick={()=>setcount((c)=>c+1)}>count +</button>
        <p>{calcu}</p>
        </>
    )
}                                                                                                                       
export default Countone;
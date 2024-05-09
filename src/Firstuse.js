import { useEffect, useState } from "react";

function Timer()
{
    const[count,setcount]=useState(0);
    useEffect(()=>{
        let timer=setTimeout(()=>{
            setcount((count)=>count+1);
        },1000);
        return ()=>clearTimeout(timer)``
    },[]);
    return <h1>hello {count} yash</h1>;
}
export default Timer;
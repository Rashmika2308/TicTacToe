import { useCallback, useState } from "react"


const functionCounter=new Set()

export default function Home()
{
    const[count,setCounter]=useState(0)
    const[secondCount,setsecondCount]=useState(0)

    // const incre=()=>
    // {
    //     setCounter(count+1)
    // }

    const incre=useCallback(()=>
    {
        setCounter(count+1)
    },[count])

    // const decre=()=>
    // {
    //     setCounter(count-1)
    // }

    const decre=useCallback(()=>
    {
        setCounter(count-1)
    },[count])

    // const incredecre=()=>
    // {
    //    setsecondCount(secondCount+1)
    // }

    const incredecre=useCallback(()=>
    {
       setsecondCount(secondCount+1)
    },[secondCount])
    
functionCounter.add(incre)
functionCounter.add(decre)
functionCounter.add(incredecre)

console.log(functionCounter)

return(
    <>
    <h1>use callback</h1>
    Count:{count}
    other count:{setCounter}
    <button onClick={incre}>first</button>
    <button onClick={decre}>second</button>
    <button onClick={incredecre}>first1</button>
    </>
    )




































}
import { createContext, useState, useContext } from "react";

const name=createContext()
const name1=createContext()
const name2=createContext()

function Component6()
{
    const[user]=useState("yash");
    const[user1]=useState("hosur");
    const[user2]=useState("tamilnadu");

    return
    (
        <name.Provider value={user}>
            <name1.Provider value={user1}>
                <name2.Provider value={user2}>
            <Component7/>
            </name2.Provider>
            </name1.Provider>
        </name.Provider>
    )
}
function Component7(){
    return(
        <>
        <h1>component7</h1>
        <Component8/>
        </>
    )
}
function Component8(){
    return(
        <>
        <h1>component8</h1>
        <Component9/>
        </>
    )
}
function Component9(){
    const user=useContext(name);
    const user1=useContext(name1);
    const user2=useContext(name2);
    return(
        <>
        <h1>component7</h1>
        <p>hello i am {user} and from {user1} and state is {user2}</p>
        </>
    )
}
export default Component6;
import { useState } from "react";
// const { useState } = require("react");

function Component1()
{
    const[user]=useState("yash");
    return(
        <>
        <h1>{`hello ${user}`}</h1>
        <Component2 user={user}/>
        </>
    );
}
function Component2({user})
{
    return(
        <>
        <h1>component2</h1>
        <Component3 user={user}/>
        </>
    );
}
function Component3({user})
{
    return(
        <>
        <h1>component3</h1>
        <Component4 user={user}/>
        </>
    );
}
function Component4({user})
{
    return(
        <>
        <h1>component4</h1>
        <h1>{`hello ${user}`}</h1>
        </>
    );
}
export default Component1;
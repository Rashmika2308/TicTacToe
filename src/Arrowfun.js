import React from 'react';

const MyComponent = () =>{
  return(
    <>
    <h1 style={{textAlign:'left'}}>Arrow function</h1>
    <p style={{textAlign:'left'}}>arrow function in ecma</p>
    </>
  )
}
// const MyComponent = () => {
//   return (
//     <div>
//       <h1 style={{textAlign:'left'}}>Arrow function</h1>
//       <p style={{textAlign:'left'}}>arrow function in ecma</p>
//     </div>
//   )
// }

function MyComponent1()
{
  const fruit=['apple','pineapple','grapes','orange'];
  return(
    <>
    <h1 style={{textAlign:'left'}}>map function using array</h1>
    <h2 style={{textAlign:'left'}}>list of fruits</h2>
    <ul>
      {fruit.map((fruit,index)=>(
        <li style={{textAlign:'left'}}>{fruit}</li>
      ))}
    </ul>
    </>
  )
}

function MyComponent3()
{
    const num1=[1,2,3,4];
    const num2=[5,6,7,8];
    const num3=[...num1,...num2];
    return(
      <>
      <h1 style={{textAlign:'left'}}>spread operator</h1>
      <ul>
        {num3.map((num3,index)=>(
          <li style={{textAlign:'left'}}>{num3}</li>
        ))}
      </ul>
      </>
    )
}

function MyComponent4()
{
  const name1='rash';
  const name2=`hello, ${name1}!`;
  return(
    <>
    <h1 style={{textAlign:'left'}}>Backtics</h1>
    <p style={{textAlign:'left'}}>{name2}</p>
    </>
  )
}


export {MyComponent,MyComponent1,MyComponent3,MyComponent4};
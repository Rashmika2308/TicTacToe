
import React,{ useState ,useMemo } from 'react';
function Homefirst() {
  const[ count , setCount]=useState(0);///first one for count 
  const[ item , setItem]=useState(10); ///second one for item

//  function multiCount()
//  {
//    console.warn("multiCount")
//    return count*5;
//  } 
  const multiCount = useMemo(function multiCount(){
    console.warn("multiCount")
    return count*5
  },[count])

  return (
    <div className="App">
    <h1>useMemo Hook in React</h1>
    <h2>Count : {count}</h2>
    <h3>Item : {item}</h3>
    <h2>{multiCount}</h2>
    <button onClick={() => setCount(count + 1)}>Update Count</button>
    <button onClick={() => setItem(item *  10)}>Update Item</button>
    </div>
  );
}
export default Homefirst;
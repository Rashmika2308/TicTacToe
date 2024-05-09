import './App.css';
import './Managertwo.css';
import Vini from './L1.js';
import Vini1 from './L2.js';

function ManagerDetails() {
    const v="lucky";
  return (
    <div>
      <h1 style={{textAlign:'left'}}>Ternary operator</h1>
      {v==="lucky" ? <Vini/> : <Vini1/>}
    </div>
  );
}
export default ManagerDetails;
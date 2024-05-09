import './App.css';
import {One,Onetwo} from './One';
import Two from './Two';
import Three from './Three';
import Four from './Four';
import {MyComponent,MyComponent1,MyComponent3,MyComponent4} from './Arrowfun';
import {List,Table} from './Listable';
import MyComponent6 from './Proper';
import {State1,State2} from './State';
import Image from './Image';
import Timer from './Firstuse';
import Countone from './Seconduse';
import Home from './Calbacksta';
import Homefirst from './Memosta';
import Component1 from './propstate';
import Component6 from './propconte';
function Combine() {
  return (
    <div>
      <One />
      <Two />
      <Three />
      <Four />
      <Onetwo />
      <h1 style={{color:'gray'}}>Rashmika 5</h1>
      <List />
      <Table />
      <MyComponent />
      <MyComponent1 />
      <MyComponent3 />
      <MyComponent4 />
      <MyComponent6 />
      <State1 />
      <State2 />
      <Image />
      <Timer />
      <Countone />
      <Home />
      <Homefirst />
      <Component1 />
      <Component6 />
    </div>
  );
}

export default Combine;
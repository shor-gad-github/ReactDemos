import logo from './logo.svg';
import CounterDemo from './Counter';//Function Component
import Car from './Car';//Class Component
import DemoListState from './DemoListState';//Class Component

function AppStateDemos(){
  return(
  
  <>
   {/* <CounterDemo starcount={100}  /> 
   <Car  username="g.shor@outlook.com"></Car> */}
   <DemoListState initialList={[1,2,3]} ></DemoListState>

   </>
  );
}

export default AppStateDemos;

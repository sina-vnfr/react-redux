import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

function App() {

  
  const dispatch = useDispatch()
  const counter = useSelector((state)=>state.counter)


  const increament = () =>{
    dispatch({type:"INC"})
  }


  const decreament = () =>{
    dispatch({type:"DEC"})
  }


  return (
    <div>
    {counter}
    <button onClick={increament}>increament</button>
    <button onClick={decreament}>decreament</button>
    </div>
  );
}

export default App;

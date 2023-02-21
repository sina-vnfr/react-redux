import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { actions } from './store/index';

function App() {


  const dispatch = useDispatch()
  const counter = useSelector((state)=>state.counter)


  const increament = () =>{
    dispatch(actions.increament())
  }


  const decreament = () =>{
    dispatch(actions.decreament())
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

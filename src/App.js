import logo from './logo.svg';
import './App.css';

import Form from './components/form';
import Input from './components/input';
function App() {
  let arr = ['kartik','ranaut','pankaj'];
  let component= arr.map((element)=> <Form name={element}></Form>);
  function arrAdd(val){
      arr.push(val);
      console.log(arr);
  }

  return (
    <div>
      {component}
      <Input func={arrAdd}></Input>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Form from './components/form';
function App() {
  let arr = ['kartik','ranaut','pankaj'];
  let component= arr.map((element)=> <Form name={element}></Form>);
  
  return (
    <div>
      {component}
    </div>
  );
}

export default App;

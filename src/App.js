import './App.css';
import Task03 from "./components/Task03"
function App() {
  const colors = ['Red','Yellow','Orange','Green', 'Blue', 'Violet', 'Purple','Black'];
  return (
    <div className="App">
     <Task03 colors={colors}/>
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';
import Add from './components/Add';
import List from './components/List';

function App() {
  const [chores, setChores] = useState([]);

  return (
    <div className="App">
      <Add list={chores} setList={setChores}/>
      <List chores={chores} setChores={setChores}/>
    </div>
  );
}

export default App;

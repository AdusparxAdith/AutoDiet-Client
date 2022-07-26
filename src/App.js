import { useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  useEffect(()=>{
    axios.get('/api')
  },[])

  return (
    <div className="App">
      <header className="App-header">
        AUTO DIET
      </header>
    </div>
  );
}

export default App;

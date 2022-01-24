import react from 'react';
import Navbar from './Nav';
import Bio from './Bio';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Bio />
      <div className='footer'>
        <h1>Crewbella</h1>
        <p>Privacy Policy | Terms & Condition | User Agreement</p>
      </div>
    </div>
  );
}

export default App;

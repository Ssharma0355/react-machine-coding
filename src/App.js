import logo from './logo.svg';
import './App.css';
import TrfficLight from './traffic-light-nobroker/TrfficLight';
import StopWatch from './stop-watch/StopWatch';
import AutoSearch from './auto-search/AutoSearch';
import ParentFetch from './reusable-table/ParentFetch';

function App() {
  return (
    <div className="App">
      {/* <TrfficLight />
      <StopWatch /> */}
      {/* <AutoSearch /> */}
      <ParentFetch />
    
    </div>
  );
}

export default App;

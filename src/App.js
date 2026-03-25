import logo from './logo.svg';
import './App.css';
import TrfficLight from './traffic-light-nobroker/TrfficLight';
import StopWatch from './stop-watch/StopWatch';
import AutoSearch from './auto-search/AutoSearch';
import ParentFetch from './reusable-table/ParentFetch';
import TodoList from './todo-list/TodoList';
import ParentConfig from './traffic-light-nobroker/ParentConfig';
import ParentProgress from './progressbar/ParentProgress';
import LifeClass from './life-cycle-method/LifeClass';
import DropDowns from './dynamic-dropdown/DropDowns';
import Search from './debounce/Search';
import StateIssue from './kubeinter/StateIssue';
import EffectIssue from './kubeinter/EffectIssue';
import DebuundPrac from './kubeinter/DebuundPrac';
import BrokenApi from './kubeinter/BrokenApi';
import BrokenApi2 from './kubeinter/BrokenApi2';
import Task from './kubeinter/Task';

function App() {
  return (
    <div className="App">
      {/* <AutoSearch /> */}
      {/* <ParentFetch /> */}
      {/* <TodoList /> */}
    
       {/* Traffic Light  */}
       {/* <ParentConfig /> */}


       {/* PROGRESSBAR  */}
       {/* <ParentProgress /> */}

       {/* Life Cycle Method  */}
       {/* <LifeClass /> */}
     
       {/* Dynamic DropDown Interview */}
       {/* <DropDowns /> */}

       {/* Debounce  */}
       {/* <Search /> */}
       {/* <StateIssue /> */}
       {/* <EffectIssue /> */}
       {/* <DebuundPrac /> */}
       {/* <BrokenApi /> */}
       {/* <BrokenApi2 /> */}
       <Task />
    </div>
  );
}

export default App;

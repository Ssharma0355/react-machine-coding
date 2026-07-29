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
import ProductSearch from './kubeinter/ProductSearch';
import FeedbackForm from './kubeinter/FeedbackForm';
import AutoLogoutTimer from './kubeinter/AutoLogoutTimer';
import TimerCount from './kubeinter/TimerCount';
import UserList from './kubeinter/UserList';
// import ProductDashboard from './kubeinter/ProductDashboard';
import Parentcon from "./kubeinter/parentcon"

import { lazy, Suspense } from 'react';
import SampleX from './kubeinter/SampleX';
import Effect from './megthink/Effect';
import CRUD from './megthink/CRUD';
import AddUser from './megthink/AddUser';
import ParentCall from './megthink/Calls/ParentCall';
import Bounce from './megthink/Bounce';
import MainTab from './tabform/MainTab';
import LightConfig from './traffic-light-nobroker/re-practice/LightConfig';
import Pagination from './Pagination/Pagination';
import Page from './Pagination/Practice/Page';
import SearchFilter from './search-filter/SearchFilter';
import Config from './prctice/Config';
import Delu from './delu/Delu';
import ParentForm from './Tab-Form/ParentForm';
import SearchAgain from './debounce/SearchAgain';
import Pagei from './Pagination/Practice2/Pagei';
import Board from './tic-tac-toe/Board';
import MainBoard from './tic-tac-toe/tic-practice/MainBoard';
import Pagnigation from './page/Pagnigation';
import Deal from './practicexp/Deal';
import InfinteScroll from './InfintieScroll/InfinteScroll';
import Carousel from './carousel/Carousel';
const ProductDashboard = lazy(()=> import("./kubeinter/ProductDashboard"))

function App() {
  return (
    <div >
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
       {/* <Task /> */}

       {/* <ProductSearch /> */}
       {/* <FeedbackForm /> */}
       {/* <AutoLogoutTimer />
       <TimerCount /> */}
       {/* <UserList /> */}
       {/* <Suspense fallback={<p>Loading</p>}>
       <ProductDashboard />
       </Suspense>

       <Parentcon /> */}
       {/* <SampleX /> */}
       {/* <Effect /> */}
       {/* <CRUD />
       <AddUser /> */}
       {/* <ParentCall /> */}
       {/* <Bounce /> */}
       {/* <MainTab /> */}
       {/* <LightConfig /> */}
       {/* <Pagination /> */}
       {/* <Page /> */}
       {/* <SearchFilter /> */}
       {/* <Config /> */}
       {/* <Delu /> */}
       {/* <ParentForm /> */}
       {/* <SearchAgain /> */}
       {/* <Pagei /> */}
       {/* <Board /> */}
       {/* <MainBoard /> */}
       {/* <Pagnigation /> */}
       {/* <Deal /> */}
       {/* <InfinteScroll /> */}
       <Carousel />
    </div>
  );
}

export default App;

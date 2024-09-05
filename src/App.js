import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import Homecontainer from "./components/Homecontainer";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

// DropDownComponent??
import Economic12 from "./components/Economic12";
import English12 from "./components/English12";
import Computer12 from "./components/Computer12";
import Account12Solution from "./components/Account12Solution";
import ModelQuestion12 from "./components/ModelQuestion12"
import ImportantQuestion12 from "./components/ImportantQuestion12";
import  Class11CompletNotes from "./components/Class11CompletNotes";

//chapters import here
import Chapterone from "./components/Chapterone";
import Chapterten from "./components/Chapterten";
import Chaptereleven from "./components/Chaptereleven";
import Chaptertwo from "./components/Chaptertwo";
import Chaptertwelvth from "./components/Chaptertwelvth";
import Chapterthree from "./components/Chapterthree";
import ChapterThreeteen from "./components/ChapterThreeteen";
import Chapterfour from './components/Chapterfour';
import Chapterfourteen from './components/Chapterfourteen';
import Chapterfive from "./components/Chapterfive";
import Chapterfiveteen from "./components/Chapterfiveteen";
import Chaptereight from "./components/Chaptereight";
import Chaptereighten from "./components/Chaptereighten";
import Chapterseven from "./components/Chapterseven";
import Chapterseventeen from "./components/Chapterseventeen";
import Chaptersix from "./components/Chaptersix";
import Chaptersixteen from "./components/Chaptersixteen";
import Chapternine from "./components/Chapternine";
import Chapternineteen from "./components/Chapternineteen";

//DropDownCompomen

function App() {
  
  return (
    <>
      <Router>
      <Navbar />
      <div className="SectionShow">
          <Routes>
          <Route exact path="/" element={<Homecontainer />} />
            <Route exact path="/Homecontainer" element={<Homecontainer />} />
            <Route exact path="/About" element={<About />} />
            <Route exact path="/Economic_12" element={<Economic12 />} />
            <Route exact path="/English_12" element={<English12 />} />
            <Route path="/Chapterone" element={<Chapterone />} /> 
            <Route path="/Chaptertwo" element={<Chaptertwo />} /> 
            <Route path="/Chapterthree" element={<Chapterthree />} /> 
            <Route path="/Chapterfive" element={<Chapterfive />} /> 
            <Route path="/Chapterfour" element={<Chapterfour />} /> 
            <Route path="/Chaptersix" element={<Chaptersix />} /> 
            <Route path="/Chapterseven" element={<Chapterseven />} /> 
            <Route path="/Chaptereight" element={<Chaptereight />} /> 
            <Route path="/Chapternine" element={<Chapternine />} /> 
            <Route path="/Chapterten" element={<Chapterten/>} /> 
            <Route path="/Chaptereleven" element={<Chaptereleven/>} /> 
            <Route path="/Chaptertwelvth" element={<Chaptertwelvth />} /> 
            <Route path="/Chapterthreeteen" element={<ChapterThreeteen />} /> 
            <Route path="/Chapterfiveteen" element={<Chapterfiveteen />} /> 
            <Route path="/Chapterfourteen" element={<Chapterfourteen />} /> 
            <Route path="/Chaptersixteen" element={<Chaptersixteen />} /> 
            <Route path="/Chapterseventeen" element={<Chapterseventeen />} /> 
            <Route path="/Chaptereighten" element={<Chaptereighten />} /> 
            <Route path="/Chapternineteen" element={<Chapternineteen />} /> 
            <Route exact path="/Computer_12" element={<Computer12 />} />
            <Route exact path="/Account_12_Solution" element={<Account12Solution />} />
            <Route exact path="/Model_Question_12" element={<ModelQuestion12 />} />
            <Route exact path="/Class_11_Complet_Notes" element={<Class11CompletNotes />} />
            <Route exact path="/Important_Question_12" element={<ImportantQuestion12 />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

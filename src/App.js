import './App.css';
import {BrowserRouter, Route} from "react-router-dom"
import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import Footer from './components/Footer/Footer';
import Dialogs from "./components/Content/Dialogs/Dialogs";
import Profile from "./components/Content/Profile/Profile";
import News from "./components/Content/News/News";
import Music from "./components/Content/Music/Music";
import Settings from "./components/Content/Settings/Settings";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Aside/>
        <div className="content">
          <Route path="/profile" component={Profile}/>
          <Route path="/dialogs" component={Dialogs}/>
          <Route path="/news" component={News}/>
          <Route path="/music" component={Music}/>
          <Route path="/settings" component={Settings}/>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
};

export default App;

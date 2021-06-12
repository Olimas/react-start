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
import Friends from "./components/Aside/Friends/Friends";

const App = (props) => {

  //* Higher Order Component (HOC)
  // let SomeComponent = () => <Profile/>

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Aside state={props.state.dialogsPage}/>
        <div className="content">
          <Route path="/profile"
                 render={() => <Profile state={props.state.profilePage}/>}/>
          <Route path="/dialogs"
                 render={() => <Dialogs state={props.state.dialogsPage}/>}/>
          <Route path="/news" render={() => <News/>}/>
          <Route path="/music" render={() => <Music/>}/>
          <Route path="/settings" render={() => <Settings/>}/>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
};

export default App;

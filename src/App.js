import './App.css';
import {BrowserRouter, Route} from "react-router-dom"
import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import Footer from './components/Footer/Footer';
import Profile from "./components/Content/Profile/Profile";
import News from "./components/Content/News/News";
import Music from "./components/Content/Music/Music";
import Settings from "./components/Content/Settings/Settings";
import DialogsContainer from "./components/Content/Dialogs/DialogsContainer";
import UsersContainer from "./components/Content/Users/UsersContainer";

const App = () => {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Aside/>
        <div className="content">
          <Route path="/profile" render={() => <Profile/>}/>
          <Route path="/dialogs" render={() => <DialogsContainer/>}/>
          <Route path="/news" render={() => <News/>}/>
          <Route path="/music" render={() => <Music/>}/>
          <Route path="/settings" render={() => <Settings/>}/>
          <Route path="/users" render={() => <UsersContainer/>}/>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
};

export default App;

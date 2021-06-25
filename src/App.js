import './App.css';
import {Route, withRouter} from "react-router-dom"
import Aside from './components/Aside/Aside';
import Footer from './components/Footer/Footer';
import News from "./components/Content/News/News";
import Music from "./components/Content/Music/Music";
import Settings from "./components/Content/Settings/Settings";
import DialogsContainer from "./components/Content/Dialogs/DialogsContainer";
import UsersContainer from "./components/Content/Users/UsersContainer";
import ProfileContainer from "./components/Content/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {Component} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/preloader/Preloader";
import {setCurrentPage} from "./redux/users-reducer";

class App extends Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer/>
        <Aside/>
        <div className="content">
          <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
          <Route path="/dialogs" render={() => <DialogsContainer/>}/>
          <Route path="/news" render={() => <News/>}/>
          <Route path="/music" render={() => <Music/>}/>
          <Route path="/settings" render={() => <Settings/>}/>
          <Route path="/users" render={() => <UsersContainer/>}/>
          <Route path="/login" render={() => <LoginPage/>}/>
        </div>
        <Footer/>
      </div>

    );
  }
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App);





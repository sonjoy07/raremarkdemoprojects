import logo from './logo.svg';
import './App.css';
import Menu from './componants/Menu';
import { Provider } from 'react-redux';
import SearchOption from './componants/SearchOption';
import Landing from './componants/Landing';
import Details from './componants/Details';
import Login from './componants/Login';
import Registration from './componants/Registration';
import Search from './componants/Search';
import Footer from './componants/Footer';
import Post from './componants/Post';
import configureStore from './store/configureStore';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Cookies from 'js-cookie';
var pathname = window.document.location.pathname;
const store = configureStore();
const getCurrentuserid = () => {
  let user_id = Cookies.get('c_user');
  return user_id == null ? '' : user_id;
}
// store.dispatch(setPathname(pathname));

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Menu />
          <Switch>
            <Route exact path="/">
              <SearchOption />
              <Landing />
              <Footer />
            </Route>
            <Route path="/details">
              <SearchOption />
              <Details />
              <Footer />
            </Route>
            <Route path="/search">
              <SearchOption />
              <Search />
              <Footer />
            </Route>
            <Route path="/post">
              <Post />
              <Footer />
            </Route>
            {getCurrentuserid() == 0 ?<Route path="/login">
              <Login />
            </Route>:<Redirect to="/"></Redirect>}
            {getCurrentuserid() == 0 ? <Route path="/registration">
              <Registration />
            </Route>:<Redirect to="/"></Redirect>}
            
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;

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
import configureStore from './store/configureStore';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
var pathname = window.document.location.pathname;
const store = configureStore();
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
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/registration">
              <Registration />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;

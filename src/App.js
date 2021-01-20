import logo from './logo.svg';
import './App.css';
import Menu from './componants/Menu';
import SearchOption from './componants/SearchOption';
import Landing from './componants/Landing';
import Details from './componants/Details';
import Login from './componants/Login';
import Registration from './componants/Registration';
import Search from './componants/Search';
import Footer from './componants/Footer';

function App() {
  return (
    <div className="App">
      <Menu />
      {/* <SearchOption /> */}
      {/* <Landing /> */}
      {/* <Details /> */}
      {/* <Search /> */}
      {/* <Login/> */}
      <Registration />
      {/* <Footer /> */}
    </div>
  );
}

export default App;

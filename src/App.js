import logo from './logo.svg';
import './App.css';
import Menu from './componants/Menu';
import SearchOption from './componants/SearchOption';
import Landing from './componants/Landing';
import Details from './componants/Details';
import Footer from './componants/Footer';

function App() {
  return (
    <div className="App">
      <Menu />
      <SearchOption />
      {/* <Landing /> */}
      <Details />
      <Footer />
    </div>
  );
}

export default App;

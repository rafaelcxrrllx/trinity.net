import './App.css';
import './LoadingScreen.css';
import './NavBar.css';
import LoadingScreen from './LoadingScreen';
import NavBar from './NavBar';
import logo from './trinity.svg';

function App() {
  return (
    
    <div className="App">
      <NavBar/>
      <LoadingScreen/>
      <header className="App-header">
        <img src={logo}alt="logo" />  
      </header>    
    </div>

  );
}

export default App;

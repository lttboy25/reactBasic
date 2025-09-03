import logo from './logo.svg';
import './App.scss';
import MyComponents from '../components/MyComponents';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world! Im Cozi ready to learn react Basic
        </p>
        <MyComponents></MyComponents>
      </header>
    </div>
    
  );
}

export default App;

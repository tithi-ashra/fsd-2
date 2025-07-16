import logo from './logo.svg';
import './App.css';
import Signup from './signup';
import Signup1 from './Signup1';
import Login from './Login';


function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <>
      {/* <Signup /> */}
      <Signup1 />
      <Login />
    </>
  );
}

export default App;

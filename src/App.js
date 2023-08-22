import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
// import '../../call-off-api/App'

function App() {
  // const title = "Call Off Form"
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <Create />
      </div>
    </div>
  );
}

export default App;
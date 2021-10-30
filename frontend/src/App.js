import "./App.css";
import Login from "./pages/login";
import Home from "./pages/home"

function App() {
  if (localStorage.getItem('token')) {
    return (
      <div className="App">
          <Home />
      </div>
    )
  } else {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default App;

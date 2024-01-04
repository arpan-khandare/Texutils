import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const tog = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      // document.title = 'TextUtils - Dark Mode';
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(117 197 125)";
      showAlert("Dark mode has been enabled", "success");
      // document.title = 'TextUtils - Light Mode';
    }
  };

  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={tog} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element = {<About />}            
          ></Route>
          <Route path="/" element = {<TextForm showAlert={showAlert} heading="Enter the text to analyse" mode={mode} />}
          ></Route>
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;

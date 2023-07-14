// import logo from './logo.svg';

import { useState } from "react";

import "./App.css";

import About from "./Components/About";

import Navbar from "./Components/Navbar";

import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import { BrowserRouter, Routes, Route, link} from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("light");

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

  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");

      document.body.style.backgroundColor = "#0e0d39";

      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils now';
      // }, 1500);
    } else {
      setMode("light");

      document.body.style.backgroundColor = "white";

      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      <BrowserRouter>
      <Navbar title="TextUtils" Mode={Mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

        <Routes>

          {/* <Alert alert={alert} /> */}

          {/* <div className="container my-3"> */}
            <Route exact path="/about" element={<About />}></Route>
            <Route
              exact path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter your text to analyze below"
                  Mode={Mode}
                />
              }
            ></Route>
          {/* </div> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import "./App.css";
import AboutUs from "./components/AboutUs";
import ContactUS from "./components/ContactUS";
import Home from "./components/Home";
import Offers from "./components/Offers";
import Spaces from "./components/Spaces";
import Standard from "./components/Standard";
import HeaderContainer from "./Containers/HeaderContainer";
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

function App() {

  return (
    <div>
      <Router>
        <HeaderContainer />
        <Home />
        <AboutUs />
        <Standard/>
        <Offers />
        <Spaces />
        <ContactUS />
        {/* <Premium /> */}
      </Router>
    </div>
  );
}

export default App;

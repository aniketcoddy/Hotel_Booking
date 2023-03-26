import "./App.css";
import AboutUs from "./components/AboutUs";
import ContactUS from "./components/ContactUS";
import Header from "./components/Header";
import Home from "./components/Home";
import Offers from "./components/Offers";
import Premium from "./components/Premium";
import RoomSpec from "./components/RoomSpec";
import Selection from "./components/Selection";
import Spaces from "./components/Spaces";
import Standard from "./components/Standard";

function App() {
  return (
    
      <div>
        <Header/>
        <Home/>
        <AboutUs/>
    <Selection/>
        <Offers/>
       <Spaces/>
       <ContactUS/>
      </div>
   
  );
}

export default App;

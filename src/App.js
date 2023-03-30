import "./App.css";
import AboutUs from "./components/AboutUs";
import Cart from "./components/Cart";
import ContactUS from "./components/ContactUS";

import Header from "./components/Header";
import Home from "./components/Home";

import Offers from "./components/Offers";
import Premium from "./components/Premium";
import Spaces from "./components/Spaces";
import Standard from "./components/Standard";

function App() {
  return (
    <div>
      <Header />
      {/* <Cart/>   */}
      <Home />
      <AboutUs />
      <Standard />
      <Premium />
      <Offers />
      <Spaces />
      <ContactUS />
    </div>
  );
}

export default App;

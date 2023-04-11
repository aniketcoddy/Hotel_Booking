import { useState } from "react";
import "./App.css";
import AboutUs from "./components/AboutUs";
import ContactUS from "./components/ContactUS";

import Header from "./components/Header";
import Home from "./components/Home";

import Offers from "./components/Offers";
import Premium from "./components/Premium";
import Spaces from "./components/Spaces";
import Standard from "./components/Standard";
import HeaderContainer from "./Containers/HeaderContainer";

function App() {

     const [opencart,setOpencart] = useState(false)

     const onclickopen =(e)=>{
      setOpencart(!opencart)
      console.log(e.target)
     }

  return (
    <div>
      <HeaderContainer  clickon={onclickopen}/>
      <Home open={opencart}/>
      <AboutUs />
      <Standard />
      {/* <Premium /> */}
      <Offers />
      <Spaces />
      <ContactUS />
    </div>
  );
}

export default App;

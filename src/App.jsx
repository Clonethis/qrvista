import {
  Route,Routes,
  
} from "react-router-dom";
import { useHistory } from 'react-router-dom';

import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.production.min";
import FourBox from "./FourBox";
import Header from "./Header";
import Lorem from "./Lorem";
import Freetime from "./Pages/Freetime";
import Hotel from "./Pages/Hotel";
import Konference from "./Pages/Konference";
import Home from "./Pages/Home";
import Restaurace from "./Pages/Restaurace";
import Footer from "./Footer";
// en pages
import Homeen from "./Pages/en/Homeen";
import Freetimeen from "./Pages/en/Freetimeen";
import Headeren from "./Pages/en/Headeren";
import Hoteleen from "./Pages/en/Hoteleen";
import Konferenceen from "./Pages/en/Konferenceen";
import Restauraceen from "./Pages/en/Restauraceen";

function App() {

  // const [count, setCount] = useState(0);

  // function addItemToCart(e) {
  //   const item = e.target.value;
  //   console.log(item);
  //   setCart([...cart, item]);
  // }
  // function Nice(){
  //   if(count%2===0){

  //   } 
  // }

  return (


<div className="app">
        {/* <Header/> */}
   {/* This is the alias of BrowserRouter i.e. Router */}
   {/* <Router> */}
   {/* <Header/> */}
   
        <Routes>
   {/* <Header/> */}
          <Route exact path="/" element={<Home/>} />
          <Route path="/hotel" element={<Hotel/>} />
          <Route path="/volnycas" element={<Freetime/>}/>
          <Route path="/restaurace" element={<Restaurace/>}/>
          <Route path="/konference" element={<Konference/>} />
          
          <Route path="/en" element={<Homeen/>} />
          <Route path="/hotel-en" element={<Hoteleen/>} />
          <Route path="/volnycas-en" element={<Freetimeen/>}/>
          <Route path="/restaurace-en" element={<Restauraceen/>}/>
          <Route path="/konference-en" element={<Konferenceen/>} />
          {/* <Route path="/freetime" component={Freetime} />
          <Route path="/konference" component={Konference} />
            <Route path="/restaurant" component={Restaurace} /> */}
            {/* <Route path="*" element={<NotFound />}></Route> */}
            {/* <Redirect to="/" /> */}
        </Routes>
      {/* </Router> */}
        {/* <Header/>
        <h1>NICE</h1>
        <Lorem/>
        <FourBox/> */}
<Footer/>
      </div>
  );
}


export default App;
import React from "react";

import { Routes, Route, Link } from "react-router-dom";

function Trial() {
  return (
    <div className="App">
     <Navigation/>

      <div className="main">
        {/* Define all the routes */}

        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="about" element={<About />}></Route>

          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </div>
  );
}
export const Navigation = () =>{
    return(
        <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="dashboard">Dashboard</Link>
          </li>

          <li>
            <Link to="about">About</Link>
          </li>
        </ul>
      </nav>
    )
}

export const Home = () => {
  return <div>You are in Home page</div>;
};

export const About = () => {
  return <div>This is the page where you put details about yourself</div>;
};

export const NotFound = () => {
  return <div>This is a 404 page</div>;
};

export default Trial;

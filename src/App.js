import React from "react";

import Header from "./components/layouts/Header/Header";
import Hello from "./components/Hello/Hello.jsx";
import AboutMe from "./components/AboutMe/About.jsx";
import Project from "./components/Project/Project";
import Contacts from "./components/Contacts/Contacts.jsx";

function App() {
  return (
    <div className="Add">
      <React.StrictMode>
        <div className="wrapper">
          <Header />
          <main className="main">
            <Hello />
            <AboutMe />
            <Project/>
            <Contacts/>
          </main>
        </div>
      </React.StrictMode>
    </div>
  );
}

export default App;

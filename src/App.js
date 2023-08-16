import React from "react";
import Header from "./components/layouts/Header/Header";
import Hello from "./components/Hello/Hello.jsx";
import AboutMe from "./components/AboutMe/About.jsx";

function App() {
  return (
    <div className="Add">
      <React.StrictMode>
        <div className="wrapper">
          <Header />
          <main className="main">
            <Hello />
            <AboutMe />
          </main>
        </div>
      </React.StrictMode>
    </div>
  );
}

export default App;
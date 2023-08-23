import React from "react";
import useScrollRef from './hooks/useScrollRef'

import Header from "./components/layouts/Header/Header";
import IndexPage from "./pages/IndexPage";

function App() {
  const { clickScroll, helloRef, aboutRef, projectRef, contactsRef } = useScrollRef()
  return (
    <div className="Add">
      <React.StrictMode>
        <div className="wrapper">
          <Header function={clickScroll}/>
          <main className="main">
            <IndexPage helloRef={helloRef} aboutRef={aboutRef} projectRef={projectRef} contactsRef={contactsRef}/>
          </main>
        </div>
      </React.StrictMode>
    </div>
  );
}

export default App;

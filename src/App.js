import React from "react";

import Header from "./components/layouts/Header/Header";
import IndexPage from "./pages/IndexPage";

function App() {
  return (
    <div className="Add">
      <React.StrictMode>
        <div className="wrapper">
          <Header />
          <main className="main">
            <IndexPage />
          </main>
        </div>
      </React.StrictMode>
    </div>
  );
}

export default App;

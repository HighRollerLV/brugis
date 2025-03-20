import React from "react";
import Header from "./views/components/header";
import Footer from "./views/components/footer";
import HomePage from "./views/homepage";
import "./App.css";

function App() {
  return (
      <div className="App">
        <Header />
          <HomePage/>
          <Footer/>
      </div>
  );
}

export default App;


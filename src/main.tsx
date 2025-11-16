import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/pages/Header";
import { Home } from "./components/pages/Home";
import Footer from "./components/pages/Footer";

const MainApp = () => {
  return (
    <div>
      <Header />
      <Home />
      <Footer/>
    </div>
  );
};

let rootElemtent = document.getElementById("root") as HTMLElement; //find the root element
let createRoot = ReactDOM.createRoot(rootElemtent); //create a root
createRoot.render(<MainApp />); //render the application

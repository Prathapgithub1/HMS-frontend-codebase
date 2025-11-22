import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/pages/Header";
import { Home } from "./components/pages/Home";
import Footer from "./components/pages/Footer";
import LoginPage from "./components/pages/LoginPage";
import { BrowserRouter as BR, Route, Routes } from "react-router-dom";
import MainLayout from "./components/Layouts/MainLayout";
import Dashboard from "./components/pages/Dashboard";
import { Provider } from "react-redux";
import { store } from "./Store/store";

const MainApp = () => {
  return (
    <BR>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BR>
  );
};

let rootElemtent = document.getElementById("root") as HTMLElement; //find the root element
let createRoot = ReactDOM.createRoot(rootElemtent); //create a root
createRoot.render(
  <Provider store={store}>
    <MainApp />
  </Provider>
); //render the application

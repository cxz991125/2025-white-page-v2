import React from "react";
import ReactDOM from "react-dom/client";
import { Router, Route, BrowserRouter, Routes, HashRouter } from "react-router";
import { createHashHistory } from "history";
import App from "./App.jsx";
import "reset-css";
import "virtual:windi.css";
import "./index.scss";
import './assets/swiper.min.css'
import {TabView} from './components'
import StartView from './components/views/StartView';
import Test from './Test.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <Routes>
      {/* <Route path="/" element={<App />} /> */}
      <Route path="tab" element={<TabView />}> </Route>
      <Route path="test" element={<Test />}> </Route>
      <Route path="/" element={<StartView />}> </Route>
    </Routes>
  </HashRouter >
);

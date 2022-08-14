import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navbar,
  Footer,
  Home,
  About,
  Contact,
  News,
} from "./components";

ReactDOM.render(
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/news" element={<News />} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);
serviceWorker.unregister();
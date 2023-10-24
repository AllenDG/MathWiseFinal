import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Landing from "./components/landing/Landing";
import About from "./components/about/About";

import Sb from "./components/scrollbtn/Sb";
import Courses from "./components/courses/Courses";
import Contact from "./components/contact/Contact";
import Notfound from "./components/notfound/Notfound";

import Pemdas from "../src/components/courses/sections/lessoonDetail/pemdas/Pemd";
import Parentheses from "./components/courses/sections/lessoonDetail/parentheses/Parenthe";
import Exponent from "./components/courses/sections/lessoonDetail/exponents/Expo";
import MultiDiv from "./components/courses/sections/lessoonDetail/multiDiv/MultiDiv";
import AddSub from "./components/courses/sections/lessoonDetail/addSub/AddSub";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Sb />
          <div className="_navbar">
            <Navbar />
          </div>

          <div className="_body">
            <Routes>
              <Route exact path="/" element={<Landing />} />
              <Route path="/OpenSchool" element={<Landing />} />
              <Route path="/about" element={<About />} />
              <Route path="/courses/*" element={<Courses />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Notfound />} />

              <Route path="/courses/pemdas" element={<Pemdas />} />
              <Route path="/courses/parentheses" element={<Parentheses />} />
              <Route path="/courses/exponents" element={<Exponent />} />
              <Route path="/courses/multidiv" element={<MultiDiv />} />
              <Route path="/courses/addsub" element={<AddSub />} />
            </Routes>
          </div>

          <div className="_footer">
            <Footer />
          </div>
        </>
      </BrowserRouter>
    );
  }
}
export default App;

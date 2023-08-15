import React from 'react';
import reportWebVitals from './reportWebVitals';

import './res/App.scss';
import { Container } from 'react-bootstrap';

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from './components/Homepage';
import About from './components/About';

import Links from './components/Links';
import Menu from "./components/Menu";

export default function App() {
  return (
    <Container>
      <span className="title">
        <a href="/">dav1d.mp3_</a>
      </span>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />}>
            <Route index element={<Homepage />} />
            <Route path="About" element={<About />} />
            <Route path="Links" element={<Links />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

reportWebVitals(console.log);

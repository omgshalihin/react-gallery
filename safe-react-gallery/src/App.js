import './App.css';

import React from 'react';

import NavBar from './components/navbar-components/NavBar';
import Gallery from './components/gallery-components/Gallery';
import Footer from './components/footer-components/Footer';

const App = () => (
  <div>
    <NavBar />
    <Gallery />
    <Footer />
  </div>
);

export default App;

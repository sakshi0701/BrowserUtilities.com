import React from 'react';
import './App.css'
import Navbar from './components/navbar/Navbar'
import PasswordGen from './password generator/PasswordGen';
import QRCode from './QR Code/QRCode';
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
    <Navbar />
    <div className="App">
      <PasswordGen />
      <QRCode />
    </div>
    <Footer />
    </>
  );
}

export default App;

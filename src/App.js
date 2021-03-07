import React from 'react';
import './App.css'
import Navbar from './components/navbar/Navbar'
import PasswordGen from './password generator/PasswordGen';
import QRCode from './QR Code/QRCode';
import Footer from './components/footer/Footer'
import Speed from './Speed/Speed'

function App() {
  return (
    <>
    <Navbar />
    <div className="App">
      <PasswordGen />
      <QRCode />
      <Speed />
    </div>
    <Footer />
    </>
  );
}

export default App;

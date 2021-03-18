import React from 'react';
import './App.css'
import Navbar from './components/navbar/Navbar'
import PasswordGen from './password generator/PasswordGen';
import QRCode from './QR Code/QRCode';
import Url from './URL/Url';
// import Speed from './Speed/Speed';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <PasswordGen />
        <QRCode />
        <Url />
        {/* <Speed /> */}
      </div>
      <Footer />
    </>
  );
}

export default App;

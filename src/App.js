import React from 'react';
import PasswordGen from './password generator/PasswordGen';
import QRCode from './QR Code/QRCode';

function App() {
  return (
    <div className="App">
      <PasswordGen />
      <QRCode />
    </div>
  );
}

export default App;

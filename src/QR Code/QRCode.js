import React, { useState, useRef } from 'react';
import './QRCode.css';
import Qrcode from 'qrcode';
import QrReader from 'react-qr-reader';

const QRCode = () => {

    const [Text, setText] = useState('');
    const [ImageURL, setImageURL] = useState('');
    const [ScanResultFile, setScanResultFile] = useState('');
    const [ScanResultWebCam, setScanResultWebCam] = useState('');

    const qrRef = useRef(null);

    const generateQRCode = async () => {
        try {
            const response = await Qrcode.toDataURL(Text);
            setImageURL(response);
        } catch (error) {
            console.log(error);
        }
    }

    const onScanFile = () => {
        qrRef.current.openImageDialog();
    }

    const handleErrorFile = (error) => {
        console.log(error);
    }

    const handleScanFile = (result) => {
        if(result)
        {
            setScanResultFile(result);
        }
    }

    const handleErrorWebCam = (error) => {
        console.log(error);
    }

    const handleScanWebCam = (result) => {
        setScanResultWebCam(result);
    }

    return (
        <div>
            <div className="contain">
                <div className="card">
                    <h4>Generate and Download QR Code</h4>
                    <div className="card-content">
                        <div className="box1">
                            <input onChange={(e) => setText(e.target.value)} classname="link-input" placeholder="Enter link here" />
                            <button onClick={() => generateQRCode()}>Generate</button>
                            <br /><br /><br />
                            {ImageURL ? (<a href={ImageURL} download> <img src={ImageURL} alt="img" /> </a>) : null}
                        </div>
                        <div className="box2">
                            <button variant="contained" onClick={onScanFile}>Scan QR Code</button>
                            <QrReader
                                ref={qrRef}
                                delay={300}
                                style={{ width: "40%" }}
                                onError={handleErrorFile}
                                onScan={handleScanFile}
                                legacyMode
                            />
                            <h3>Scanned Code: { ScanResultFile }</h3>
                        </div>
                        <div className="box3">
                            <h3>Scan QR Code by WebCam</h3>
                            <QrReader
                                delay={300}
                                style={{ width: "40%" }}
                                onError={handleErrorWebCam}
                                onScan={handleScanWebCam}
                            />
                            <h3>Scanned by Web Cam code: {ScanResultWebCam}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QRCode;


// 14:03
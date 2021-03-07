import React, { useState, useEffect, useRef } from 'react';
import { FaRedo } from 'react-icons/fa';
import { getRequest } from "../utils/apiRequests";
import { BASE_URL, GET_INTERNET_SPEED } from "../utils/apiEndpoint";
import CountUp from "react-countup";
import './speed.css';

const Speed = () => {

    const [error, setError] = useState(null);
    const [speed, setSpeed] = useState(null);

    let startMethod = useRef(null);

    useEffect(() => {
        getInternetSpeed();
    }, []);

    const getInternetSpeed = async () => {
        const response = await getRequest(`${BASE_URL}${GET_INTERNET_SPEED}`);
        if (response.error) {
            setError(response.error);
            return false;
        }
        setSpeed(response.speed);
        startMethod();
    };

    return (
        <div className="speed">
            <div className="logo">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlFxqoKAmAePPK40wrOAo6zROOkBhpiAcQJA&usqp=CAU" />
            </div>
            <div className="body">
                <h3 className="heading">Your Internet Speed is </h3>
                <div className="top-section">
                    <CountUp
                        start={speed ? speed - 50 : 0}
                        end={speed ? speed : 0}
                        duration={5}
                        onEnd={() => console.log("end")}
                        onStart={() => console.log("start")}
                    >
                        {({ countUpRef, start }) => {

                            startMethod = start;

                            return (
                                <>
                                    <div className="left">
                                        <div className="speed-count" ref={countUpRef}/>
                                    </div>
                                    <div className="right">
                                        <div className="speed-measure">Mbps</div>
                                        <div className="reload" onClick={() => getInternetSpeed(start)}>
                                            <FaRedo className="icon-block" />
                                        </div>
                                    </div>
                                </>
                            )
                        }}
                    </CountUp>

                </div>
            </div>
        </div>
    )
}

export default Speed;

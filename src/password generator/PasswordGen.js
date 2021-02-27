import React from 'react';
import './password.css';
import { FaClipboard } from 'react-icons/fa';

const PasswordGen = () => {
    return (
        <div className="password">
            <div className="container">
                <div className="generator">
                    <h2 className="header">
                        Password Generator
                    </h2>
                    <div className="generate-pass">
                        <h3>Password</h3>
                        <button className="cpy-btn">
                            <FaClipboard />
                        </button>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password-strength">Password Strength</label>
                        <input type="number" id="password-strength" name="password-strength" max="20" min="5"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="uppercase-letters">Include Upper case Letters</label>
                        <input type="checkbox" id="uppercase-letters" name="uppercase-letters" max="20" min="5"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lowercase-letters">Include Lower case Letters</label>
                        <input type="checkbox" id="lowercase-letters" name="lowercase-letters" max="20" min="5"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="include-numbers">Include numbers</label>
                        <input type="checkbox" id="include-numbers" name="include-numbers" max="20" min="5"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="include-symbols">Include symbols</label>
                        <input type="checkbox" id="include-symbols" name="include-symbols" max="20" min="5"/>
                    </div>
                    <button className="generate-pass">
                        Generate Password
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PasswordGen;

import React, { useState } from 'react';

import { numbers, upperCaseLetters, lowerCaseLetters, specialCharacters, } from './Characters'
import { COPY_SUCCESS } from './Message'
import './password.css';

import { FaClipboard } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const PasswordGen = () => {

    const [password, setPassword] = useState('')
    const [passwordLength, setPasswordLength] = useState(20)
    const [includeUppercase, setIncludeUppercase] = useState(false)
    const [includeLowercase, setIncludeLowercase] = useState(false)
    const [includeNumbers, setIncludeNumbers] = useState(false)
    const [includeSymbols, setIncludeSymbols] = useState(false)

    const handleGeneratePassword = (e) => {
        if (
            !includeUppercase &&
            !includeLowercase &&
            !includeNumbers &&
            !includeSymbols
        ) {
            notify('Select atleast one option', true)
        }
        let characterList = ''

        if (includeLowercase) {
            characterList = characterList + lowerCaseLetters
        }

        if (includeUppercase) {
            characterList = characterList + upperCaseLetters
        }

        if (includeNumbers) {
            characterList = characterList + numbers
        }

        if (includeSymbols) {
            characterList = characterList + specialCharacters
        }

        setPassword(createPassword(characterList))
    }

    const createPassword = (characterList) => {
        let password = ''
        const characterListLength = characterList.length

        for (let i = 0; i < passwordLength; i++) {
            const characterIndex = Math.round(Math.random() * characterListLength)
            password = password + characterList.charAt(characterIndex)
        }
        return password
    }

    const handleCopyPassword = (e) => {
        if (password === '') {
            notify('Nothing To Copy!', true)
        } else {
            copyToClipboard()
            notify(COPY_SUCCESS)
        }
    }

    const copyToClipboard = () => {
        const newTextArea = document.createElement('textarea')
        newTextArea.innerText = password
        document.body.appendChild(newTextArea)
        newTextArea.select()
        document.execCommand('copy')
        newTextArea.remove()
    }

    const notify = (message, hasError = false) => {
        if (hasError) {
            toast.error(message, {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            })
        } else {
            toast.success(message, {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            })
        }
    }

    return (
        <div className="password">
            <h4>Password Generator</h4>
            <div className="container">
                <div className="generator">
                    <div className="generate-pass">
                        <h3>{password}</h3>
                        <button onClick={handleCopyPassword} className="cpy-btn">
                            <FaClipboard />
                        </button>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password-length">Password length</label>
                        <input defaultValue={passwordLength} onChange={(e) => setPasswordLength(e.target.value)} type="number" id="password-length" name="password-length" max="20" min="5"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="uppercase-letters">Include Upper case Letters</label>
                        <input type="checkbox" checked={includeUppercase} onChange={(e) => setIncludeUppercase(e.target.checked)} id="uppercase-letters" name="uppercase-letters" max="20" min="5" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lowercase-letters">Include Lower case Letters</label>
                        <input type="checkbox" checked={includeLowercase} onChange={(e) => setIncludeLowercase(e.target.checked)} id="lowercase-letters" name="lowercase-letters" max="20" min="5" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="include-numbers">Include numbers</label>
                        <input type="checkbox" checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)} id="include-numbers" name="include-numbers" max="20" min="5" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="include-symbols">Include symbols</label>
                        <input type="checkbox" checked={includeSymbols} onChange={(e) => setIncludeSymbols(e.target.checked)} id="include-symbols" name="include-symbols" max="20" min="5" />
                    </div>
                    <div className="submit-button">
                        <button onClick={handleGeneratePassword}>
                            Generate Password
                        </button>
                    </div>
                    <ToastContainer
                        position="bottom-left"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover={false}
                    />
                </div>
            </div>
        </div>
    )
}

export default PasswordGen;

// import { response } from 'express';
import React, { useState } from 'react';
import shrtcode from './api/shrtcode';

const HTTP_URL_VALIDATOR_REGEX = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;

const Search = () => {

    const [Link, setLink] = useState('');
    const [Short, setShort] = useState('');
    const [Loading, setLoading] = useState(false);

    const validateURL = (string) => {
        return string.match(HTTP_URL_VALIDATOR_REGEX)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateURL(Link)) {
            getLink();
            setLink('');
            setLoading(!Loading);
        }
        else
        setShort('Please input a valid URL!');
    };

    const getLink = async () => {
        await shrtcode
            .get(`shorten?url=${Link}`)
            .then((response) => {
                setShort(response.data.result.short_link);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <>
            <input onChange={(e) => setLink(e.target.value)} placeholder="Enter the URL" label="Input you link" variant="outlined" value={Link}></input>
            {!Loading && (
                <button onClick={(e) => handleSubmit(e)} variant="contained">Submit</button>
            )}

            {Loading && (
                <div class="spinner-border text-light" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            )}
            {Short && (
                <div>
                    The Short Link: {Short}
                </div>
            )}
        </>
    )
}

export default Search;

import React, { useState } from 'react';
import Head from 'next/head';
import axios from 'axios';

export default function Home() {
  const [key, setKey] = useState('-')
  const getKey = async (keyType) => {
    setKey("Getting key...");
    const url = `${window.location.href}api/${keyType}`; // API Call to get generated key.
    try {
      const response = await axios.get(url);
      setKey(response.data.key);
    } catch (error) {
      setKey("There was an error...");
    }
  };

  return (
    <>
      <Head>
        <title>windows95keygen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="center">
        <div className="container">
          <div className="card">
            <div className="card-title no-select">Generate a Windows NT 4.0 or Windows 95 Key!</div>
            <div className="card-content">
              <span className="no-select">Key: </span>
              <span id="keyOutput">{key}</span>
            </div>
            <div className="card-footer no-select">
              <button className="btn" id="normalKeyButton">
                <span className="btn-text" onClick={() => { getKey("normal") }}>Normal</span>
              </button>
              <button className="btn" id="oemKeyButton">
                <span className="btn-text" onClick={() => { getKey("oem") }}>OEM</span>
              </button>
              <a target="_blank" href="https://github.com/nilaerdna/windows95keygen">
                <button className="btn" id="githubButton">
                  <span className="btn-text">GitHub</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

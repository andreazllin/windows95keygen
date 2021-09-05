import React, { useState } from 'react';
import Head from 'next/head';
import axios from 'axios';

export default function Home() {
	const [check, setCheck] = useState('-');
	const [key, setKey] = useState('-');
	const [keyToCheck, setKeyToCheck] = useState('');

	const getKey = async (keyType) => {
		setKey('Getting key...');

		const url = `/api/${keyType}`;

		axios
			.get(url)
			.then((response) => {
				setKey(response.data.key);
			})
			.catch((error) => {
				setKey('There was an error...');
			});
	};

	const copyKey = () => {
		navigator.clipboard.writeText(key);
	};

	const checkKey = () => {
		setCheck('Checking key...');

		const url = '/api/validate';

		axios
			.get(url, {
				params: {
					key: keyToCheck,
				},
			})
			.then((response) => {
				setCheck(response.data.message);
			})
			.catch((error) => {
				setCheck('Key is not valid...');
			});
	};

	const keyInput = (event) => {
		setKeyToCheck(event.target.value);
	};

	return (
		<>
			<Head>
				<title>windows95keygen</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="center fullscreen">
				<div className="container">
					<div className="card">
						<div className="card-title no-select">Generate a Windows NT 4.0 or Windows 95 Key!</div>
						<p className="no-select">Key: {key}</p>
						<div className="no-select btns">
							<button
								className="btn"
								onClick={() => {
									getKey('normal');
								}}
							>
								<span className="btn-text">Normal</span>
							</button>
							<button
								className="btn"
								onClick={() => {
									getKey('oem');
								}}
							>
								<span className="btn-text">OEM</span>
							</button>
							<button
								className="btn"
								onClick={() => {
									copyKey();
								}}
							>
								<span className="btn-text">Copy</span>
							</button>
							<a target="_blank" href="https://github.com/nilaerdna/windows95keygen">
								<button className="btn">
									<span className="btn-text">GitHub</span>
								</button>
							</a>
						</div>
					</div>

					<div className="card">
						<div className="card-title no-select">Validate a Windows NT 4.0 or Windows 95 Key!</div>
						<input
							type="text"
							className="key-input"
							onChange={() => {
								keyInput(event);
							}}
						/>
						<p className="no-select">Check: {check}</p>
						<div className="no-select btns">
							<button
								className="btn"
								onClick={() => {
									checkKey();
								}}
							>
								<span className="btn-text">Check</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

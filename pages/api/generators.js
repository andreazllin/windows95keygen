import Checkers from './checkers';

module.exports = {
	generateNormalKey,
	generateOemKey,
};

function generateNormalKey() {
	return firstSegmentNormal().concat('-', secondSegmentNormal());
}

function generateOemKey() {
	return dateOEM().concat('-OEM-', secondSegmentOEM(), '-', lastSegmentOEM());
}

function generateNumber(digitsNumber) {
	const maxNumber = parseInt('9'.repeat(digitsNumber)) + 1;
	const generatedNumber = Math.floor(Math.random() * maxNumber);
	return String(generatedNumber).padStart(digitsNumber, '0');
}

function firstSegmentNormal() {
	let newSite = '';

	do {
		newSite = generateNumber(3);
	} while (!Checkers.checkFirstSegmentNormal(newSite));

	return newSite;
}

function secondSegmentNormal() {
	let newSite = '';

	do {
		newSite = generateNumber(7);
	} while (!Checkers.checkSecondSegmentNormal(newSite));

	return newSite;
}

function lastSegmentOEM() {
	return generateNumber(5);
}

function dateOEM() {
	let day = Math.floor(Math.random() * 367);
	let years = ['95', '96', '97', '98', '99', '00', '01', '02', '03'];
	let year = years[Math.floor(Math.random() * years.length)];
	return String(day).concat(year).padStart(5, '0');
}

function secondSegmentOEM() {
	let newSite = '';

	do {
		newSite = generateNumber(7);
	} while (!Checkers.checkSecondSegmentOEM(newSite));

	return newSite;
}

module.exports = {
	checkFirstSegmentNormal,
	checkSecondSegmentNormal,
	checkDateOEM,
	checkSecondSegmentOEM,
	checkLastSegmentOEM,
	checkNormalKey,
	checkOEMKey,
};

function checkFirstSegmentNormal(numberString) {
	// First segment must be 3 digits long and not included in the rejectedNumbers array.
	if (numberString.length != 3) {
		console.log("NORMAL - First segment length control failed");
		return false;
	}
	const rejectedNumbers = ['333', '444', '555', '666', '777', '888', '999'];
	
	if (rejectedNumbers.includes(numberString)) {
		console.log('NORMAL - Reject control failed');
		return false;
	}
	
	return true;
}

function checkSecondSegmentNormal(numberString) {
	// Second segment must be 7 digits long
	// The sum of the first 6 digits must be a mutiple of 7
	// Last digit (7th) can't be 0 or greater than 8.
	if (numberString.length != 7) {
		console.log('NORMAL - Second segment length control failed');
		return false;
	}
	const lastDigit = parseInt(numberString[numberString.length - 1]);
	if (lastDigit == 0 || lastDigit >= 8) {
		console.log('NORMAL - Second segment last digit control failed');
		return false;
	}
	let digitSum = 0;
	for (let i = 0; i < numberString.length; i++) {
		digitSum += parseInt(numberString.charAt(i));
	}
	if (digitSum % 7 != 0) {
		console.log('NORMAL - Second segment digit sum control failed');
		return false;
	}
	return true;
}

function checkDateOEM(numberString) {
	// Segment must be 5 digit long
	// First 3 digit must be a number between 0 and 366 (a day in a year, leap year is not checked)
	// Last two numbers must be in years array.
	if (numberString.length != 5) {
		console.log('OEM - Date segment length control failed');
		return false;
	}
	const day = parseInt(numberString.slice(0, 3));
	const year = parseInt(numberString.slice(3, 5));
	const years = [95, 96, 97, 98, 99, 00, 01, 02, 03];
	if (day < 0 || day > 366) {
		console.log('OEM - Date segment day control failed');
		return false;
	}
	if (!years.includes(year)) {
		console.log('OEM - Date segment year control failed');
		return false;
	}
	return true;
}

function checkSecondSegmentOEM(numberString) {
	// Segment must be 7 digit long
	// Sum of digits from 2nd to 6th must be a multiple of 7
	// Last digit (7th) can't be 0 or greater than 8.
	if (numberString.length != 7) {
		console.log('OEM - Second segment length control failed');
		return false;
	}
	if (numberString.charAt(0) != '0') {
		console.log('OEM - Second segment 0 control failed');
		return false;
	}
	let digitSum = 0;
	for (let i = 1; i < numberString.length - 1; i++) {
		digitSum += parseInt(numberString.charAt(i));
	}
	if (digitSum % 7 != 0) {
		console.log('OEM - Second segment digit sum control failed');
		return false;
	}
	const lastDigit = parseInt(numberString[numberString.length - 1]);
	if (lastDigit == 0 || lastDigit >= 8) {
		console.log('OEM - Second segment last digit control failed');
		return false;
	}
	return true;
}

function checkLastSegmentOEM(numberString) {
	// Last segment can be any 5 digits number.
	return numberString.length == 5;
}

function checkOEMKey(key) {
	const keySegments = key.trim().split('-');
	return keySegments.length == 4 && checkDateOEM(keySegments[0]) && keySegments[1].toUpperCase() == "OEM" && checkSecondSegmentOEM(keySegments[2]) && checkLastSegmentOEM(keySegments[3]);
}

function checkNormalKey(key) {
	const keySegments = key.trim().split('-');
	return keySegments.length == 2 && checkFirstSegmentNormal(keySegments[0]) && checkSecondSegmentNormal(keySegments[1]);
}

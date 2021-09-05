import Checkers from './checkers';

export default (req, res) => {
	try {
		const { key } = req.query;

		if (!key) {
			throw {
				code: 400,
				message: 'Bad Request',
			};
		}

		if (key.includes('OEM')) {
			// console.log('Checking OEM Key');
			if (Checkers.checkOEMKey(key)) {
				res.status(200).json({
					message: 'Valid OEM Key',
				});
			} else {
				res.status(200).json({
					message: 'Not Valid OEM Key',
				});
			}
		} else {
			// console.log('Checking Normal Key');
			if (Checkers.checkNormalKey(key)) {
				res.status(200).json({
					message: 'Valid Normal Key',
				});
			} else {
				res.status(200).json({
					message: 'Not Valid Normal Key',
				});
			}
		}

		console.log(key);
	} catch (error) {
		return res.status(400).json({ error });
	}
};

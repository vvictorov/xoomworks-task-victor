exports.auth = (req, res, next) => {
	const hardcodedDetails = {
		login: 'admin',
		password: 'demo'
	};

	const authHeader = req.headers.authorization;

	if (!authHeader) {
		return res.sendStatus(401);
	}

	// Parse the header
	const base64 = (req.headers.authorization || '').split(' ')[1] || '';
	const [login, password] = Buffer.from(base64, 'base64').toString().split(':');

	if (login && password && login === hardcodedDetails.login && password === hardcodedDetails.password) {
		return next();
	} else {
		return res.sendStatus(401);
	}

};

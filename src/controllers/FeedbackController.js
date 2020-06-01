const fs = require('fs');

const feedbackFilePath = __dirname + '../../../data/feedback.json';

exports.getAllFeedback = (req, res) => {
	const feedback = JSON.parse(fs.readFileSync(feedbackFilePath));

	return res.send(feedback);
};

exports.submitFeedback = (req, res) => {
	const feedback = req.body;

	const today = new Date().toDateString();

	const currentFeedback = JSON.parse(fs.readFileSync(feedbackFilePath));

	const newFileContents = JSON.stringify([
		...currentFeedback,
		{
			authorName: feedback.authorName || "Anonymous",
			body: feedback.body || "",
			dateCreated: feedback.dateCreated || today
		}
	]);

	fs.writeFile(feedbackFilePath, newFileContents, function(err) {
		if(err) {
			return console.log(err);
		}
	});

	return res.sendStatus(200);
};

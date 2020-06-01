const express = require('express');
const app = express();
const port = 5050;
const bodyParser = require('body-parser');

const FeedbackController = require('./src/controllers/FeedbackController');
const { auth } = require('./src/middleware/auth');

app.use(bodyParser.json());

app.get('/feedback', auth, FeedbackController.getAllFeedback);
app.post('/feedback', FeedbackController.submitFeedback);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

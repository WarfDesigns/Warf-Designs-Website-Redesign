const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5500;
const RECAPTCHA_SECRET_KEY = 'YOUR_SECRET_KEY_HERE';

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit', async (req, res) => {
  const token = req.body['g-recaptcha-response'];

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret: RECAPTCHA_SECRET_KEY,
        response: token,
        remoteip: req.ip,
      }),
    });

    const data = await response.json();

    if (data.success) {
      res.send('CAPTCHA passed. Form submitted successfully!');
    } else {
      res.send('CAPTCHA verification failed.');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('CAPTCHA verification error.');
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

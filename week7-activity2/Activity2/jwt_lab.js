const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

const PORT = 3000;

// Example JWT creation and decoding
const token = jwt.sign({ userId: 123, username: 'exampleUser' }, 'secretkey', { expiresIn: '1h' });
console.log('JWT Token:', token);

const decoded = jwt.verify(token, 'secretkey');
console.log('Decoded JWT:', decoded);

// Start server
app.get('/', (req, res) => {
  res.send('Server is running! JWT example works.');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

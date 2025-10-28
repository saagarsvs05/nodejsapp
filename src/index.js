const express = require('express');
const app = express();

// Use the port that Azure App Service provides via environment variable, or default to 3000
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from My Node App on Azure App Service!');
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello API endpoint works!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const express = require('express');
const mongoose = require('mongoose');

users = require('./routes/api/users');
profile = require('./routes/api/profile');
posts = require('./routes/api/posts');

const app = express();

// Database Configuration
const dbConnectionString = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(dbConnectionString)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello'));

// User Routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));

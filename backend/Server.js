const DiveSite = require('./models/DiveSite');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 5000;

const mongoURI = 'mongodb://localhost:27017/menadive';

app.use(cors());

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));




app.get('/api/diveSites', (req, res) => {
  DiveSite.find()
      .then(sites => res.json(sites))
      .catch(err => res.status(400).json('Error: ' + err));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const mongoose = require('mongoose');

const DiveSiteSchema = new mongoose.Schema({
  name: String,
  location: String,
  depth: String,
  difficulty: String,
  discription: String,
  image: String
});

const DiveSite = mongoose.model('DiveSite', DiveSiteSchema);

module.exports = DiveSite;

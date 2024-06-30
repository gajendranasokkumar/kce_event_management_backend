const mongoose = require('mongoose');

const proposalSchema = new mongoose.Schema({
  name: String,
  password: String
});

const ProposalModel = mongoose.model('users', proposalSchema);

module.exports = ProposalModel;

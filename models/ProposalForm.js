const mongoose = require('mongoose');

const proposalSchema = new mongoose.Schema({
    evNum: String,
    evName: String,
    dept: Array,
    assoDept: Array,
    assoClub: Array,
    date: Object,
    time: Object,
    evMode: String,
    evFor: String,
    evType: String,
    evLevel: String,
    venue: String,
    stuCount: String,
    allStaff: Array,
    internalResourcePerson: Array,
    externalResourcePerson: Array,
    objective: String,
    outcome: String,
    summary: String,
    hodapproval: String,
    principalapproval: String,
    author: String,
    budget: Array,
    pasystem: Array,
    refreshment : Object,
    refreshmentTotal: Number,
    hallbooking: Object,
    svgImages: Number,
    svgImagesURLS: Array
});

const ProposalFormModel = mongoose.model('allproposals', proposalSchema);

module.exports = ProposalFormModel;

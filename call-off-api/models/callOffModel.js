const mongoose = require('mongoose');

const { Schema } = mongoose;

const callOffModel = new Schema(
  {
    dateTimeSubmitted: { type: Date, default: Date.now },
    callOffDate: { type: Date},
    employeeID: { type: String },
    lastName: { type: String },
    firstName: { type: String },
    office: { type: String },
    callOffReason: { type: String },
    comments: { type: String },
    IEXUpdated: { type: String },
  }
);

module.exports = mongoose.model('CallOff', callOffModel);
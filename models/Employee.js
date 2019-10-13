const mongoose = require("mongoose");

const EmployeeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  manualAddress: {
    type: String,
    required: true
  },
  gstNo: {
    type: String,
    required: true
  },
  contactNo: {
    type: String,
    required: true
  },
  mailId: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  mapAddress: {
    type: String
  },
  attachments: {
    type: Array
  }
});

module.exports = mongoose.model("employee", EmployeeSchema);

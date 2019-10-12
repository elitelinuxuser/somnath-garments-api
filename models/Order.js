const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = mongoose.Schema({
  company: {
    type: Schema.Types.ObjectId,
    ref: "company",
    required: true
  },
  orderNo: {
    type: Number,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  rollOrLump: {
    type: String,
    enum: ["roll", "lump"],
    default: "roll"
  },
  date: {
    type: Date,
    default: Date.now
  },
  dateOfCompletion: {
    type: Date
  },
  quantity: {
    type: Number,
    required: true
  },
  totalMeters: {
    type: Number,
    required: true
  },
  receiverName: {
    type: String,
    required: true
  },
  attachment: {
    type: Array
  },
  amountToBeReceived: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    required: true,
    enum: ["taken", "doing", "completed"]
  }
});

module.exports = Order = mongoose.model("orders", OrderSchema);

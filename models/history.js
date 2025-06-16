import mongoose from "mongoose";

const historySchema = new mongoose.Schema({
  Id: { type: String },
  entryDate: { type: Date, default: Date.now },
  exitDate: { type: Date },
  status: {
    type: Boolean, default: true
  }
});

const History = mongoose.model('History', historySchema);

export default History;

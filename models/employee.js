import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  employeeId: { type: String },
  name: { type: String },
  status: { type: String },
});

const Employee = mongoose.model('Employee', employeeSchema);

export default Employee;

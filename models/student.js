import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  studentId: { type: String },
  name: { type: String },
  status: { type: String },
});

const Student = mongoose.model('Student', studentSchema);

export default Student;

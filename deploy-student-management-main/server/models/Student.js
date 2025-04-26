import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  course: { type: String, required: true },
  enrollmentYear: { type: String, required: true },
  rollNumber: { type: String, required: true },
  dob: { type: Date, required: true },  // Date of Birth field
});

const Student = mongoose.model('Student', studentSchema);
export default Student;

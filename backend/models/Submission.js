import mongoose from 'mongoose';

const SubmissionSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String
});

const Submission = mongoose.model('Submission', SubmissionSchema);

export default Submission;

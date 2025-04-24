// submissions.js
import express from 'express';
import Submission from '../models/Submission.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const newSubmission = new Submission({ name, email, phone });
    await newSubmission.save();
    res.status(201).json({ message: 'Submission saved!' });
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong.' });
  }
});

export default router;


const express = require('express');
const router = express.Router();
const {
  submitContactForm,
  getAllSubmissions,
  getSubmissionById,
} = require('../controllers/contactController');

// POST /api/contact - Submit contact form
router.post('/', submitContactForm);

// GET /api/contact - Get all submissions (Admin)
router.get('/', getAllSubmissions);

// GET /api/contact/:id - Get single submission by ID
router.get('/:id', getSubmissionById);

module.exports = router;
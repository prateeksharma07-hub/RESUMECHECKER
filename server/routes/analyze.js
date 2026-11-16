import express from 'express';
import multer from 'multer';
import { extractTextFromPDF } from '../services/pdfService.js';
import { analyzeResumeWithGemini } from '../services/geminiService.js';

const router = express.Router();

// Memory storage for multer (5MB limit)
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    const original = file.originalname.toLowerCase();
    const isPdf = file.mimetype === 'application/pdf' || original.endsWith('.pdf');
    const isTxt = file.mimetype === 'text/plain' || original.endsWith('.txt');

    if (isPdf || isTxt) {
      cb(null, true);
    } else {
      cb(new Error('Only PDF (.pdf) and Plain Text (.txt) formats are supported for resume file uploads.'));
    }
  }
});

/**
 * GET /api/health
 * Returns service status and whether GEMINI_API_KEY is configured
 */
router.get('/health', (req, res) => {
  const hasKey = Boolean(
    process.env.GEMINI_API_KEY &&
    process.env.GEMINI_API_KEY.trim() !== '' &&
    process.env.GEMINI_API_KEY !== 'your_gemini_api_key_here'
  );

  res.json({
    status: 'ok',
    service: 'CareerLens AI Backend API',
    apiKeyConfigured: hasKey,
    timestamp: new Date().toISOString()
  });
});

/**
 * POST /api/analyze
 * Analyzes candidate resume against target job description using Gemini API
 */
router.post('/analyze', upload.single('resumeFile'), async (req, res) => {
  try {
    let resumeText = req.body.resumeText || '';
    const jobDescription = req.body.jobDescription || '';
    const customApiKey = req.headers['x-gemini-api-key'] || req.body.geminiApiKey || null;

    // 1. Process uploaded file if present
    if (req.file) {
      const original = req.file.originalname.toLowerCase();
      console.log(`[Upload] Processing ${req.file.originalname} (${(req.file.size / 1024).toFixed(1)} KB)`);

      if (original.endsWith('.pdf') || req.file.mimetype === 'application/pdf') {
        resumeText = await extractTextFromPDF(req.file.buffer);
      } else {
        resumeText = req.file.buffer.toString('utf-8');
      }
    }

    // 2. Validate Resume Input
    if (!resumeText || typeof resumeText !== 'string' || resumeText.trim().length < 20) {
      return res.status(400).json({
        error: 'Invalid or missing resume. Please provide at least 20 characters of resume text or upload a valid PDF/TXT resume.',
        code: 'INVALID_RESUME_INPUT'
      });
    }

    // 3. Validate Job Description Input
    if (!jobDescription || typeof jobDescription !== 'string' || jobDescription.trim().length < 10) {
      return res.status(400).json({
        error: 'Job description is required to perform matching analysis (minimum 10 characters).',
        code: 'INVALID_JOB_DESCRIPTION'
      });
    }

    console.log(`[Analyze] Analyzing resume (${resumeText.length} chars) vs Job Description (${jobDescription.length} chars)...`);

    // 4. Call server-side Gemini integration
    const analysis = await analyzeResumeWithGemini(resumeText, jobDescription, customApiKey);

    // 5. Return structured JSON
    return res.json({
      success: true,
      data: analysis,
      metadata: {
        modelUsed: analysis.modelUsed || 'gemini',
        resumeLength: resumeText.length,
        jdLength: jobDescription.length,
        processedAt: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('[API /analyze Error]:', error.message);

    const statusCode = error.statusCode || 500;
    const responseBody = {
      error: error.message || 'An unexpected error occurred during resume analysis.',
      code: error.code || 'SERVER_ERROR'
    };

    if (error.setupGuide) {
      responseBody.setupGuide = error.setupGuide;
    }

    return res.status(statusCode).json(responseBody);
  }
});

export default router;

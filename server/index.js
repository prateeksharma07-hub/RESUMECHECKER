import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import multer from 'multer';
import analyzeRouter from './routes/analyze.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Routes
app.use('/api', analyzeRouter);

// Root route
app.get('/', (req, res) => {
  res.send({
    message: 'CareerLens AI API Server is running.',
    endpoints: {
      health: 'GET /api/health',
      analyze: 'POST /api/analyze'
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('[Server Error]:', err);
  if (err instanceof multer.MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ error: 'File size exceeds limit (Max 5MB).' });
    }
  }
  res.status(500).json({ error: err.message || 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`===============================================`);
  console.log(`🚀 CareerLens AI Server running on port ${PORT}`);
  console.log(`📡 Health Check: http://localhost:${PORT}/api/health`);
  console.log(`🔑 Gemini Key Configured: ${Boolean(process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY.trim() !== '')}`);
  console.log(`===============================================`);
});

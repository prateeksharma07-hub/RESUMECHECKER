import pdf from 'pdf-parse';

/**
 * Extracts plain text from a PDF Buffer
 * @param {Buffer} buffer 
 * @returns {Promise<string>}
 */
export async function extractTextFromPDF(buffer) {
  try {
    const data = await pdf(buffer);
    if (!data || !data.text || data.text.trim().length === 0) {
      throw new Error('No readable text could be extracted from this PDF. Please ensure it is not a scanned image.');
    }
    // Clean up excessive whitespace and page-break artifacts
    const cleanedText = data.text
      .replace(/\r\n/g, '\n')
      .replace(/\n{3,}/g, '\n\n')
      .trim();
    return cleanedText;
  } catch (error) {
    console.error('[PDF Service Error]:', error.message);
    throw new Error(`Failed to parse PDF file: ${error.message}`);
  }
}

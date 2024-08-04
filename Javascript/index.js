import dotenv from 'dotenv';

// Tải các biến môi trường từ tệp .env
dotenv.config();

// Sử dụng biến môi trường
const API_KEY = process.env.GEMINI_API_KEY;

console.log(`API Key: ${API_KEY}`);

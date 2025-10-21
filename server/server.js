const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const requestIp = require('request-ip');
const { xss } = require('express-xss-sanitizer');

const connectDb = require('./config/db');
const connectCloudinary = require('./config/cloudinary');
const limiter = require('./config/rateLimiter');
const userRouter = require('./route/userroutes');

const app = express();

// Connect to database and cloud storage
connectDb();
connectCloudinary();

// Middleware setup
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(limiter); // ✅ FIXED: use the middleware directly
app.use(express.json());
app.use(xss());
app.use(cookieParser());
app.use(requestIp.mw());

// Routes
app.use('/api/auth', userRouter);

// Start server
app.listen(8000, () => {
  console.log('Server running on port 8000');
});

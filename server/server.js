// server.js
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const requestIp = require('request-ip');
const { xss } = require('express-xss-sanitizer');
const helmet = require('helmet');

const connectDb = require('./config/db');
const connectCloudinary = require('./config/cloudinary');
const limiter = require('./config/rateLimiter'); // assume this is an express middleware
const userRouter = require('./route/userroutes');
const errormiddleware = require('./middleware/errormiddleware');

const app = express();

// Connect to database and cloud storage
connectDb();
connectCloudinary();

// ------------- Global middleware (ordered) -------------

// 1) CORS (very early)
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));

// 2) request-ip so downstream middleware (e.g., rate limiter) can access req.clientIp
app.use(requestIp.mw());

// 3) Rate limiter - keep it early to short-circuit abusive requests
app.use(limiter);

// 4) Body parsing (express.json, urlencoded if needed) BEFORE xss middleware
app.use(express.json());


// 5) Cookies (so routes and validators can access cookies)
app.use(cookieParser());

// 6) XSS sanitizer - after body parsing
app.use(xss()); // this will sanitize req.body, req.query, req.params

// (Optional) Security headers, CSP, etc.
app.use(helmet());

// ------------- Routes -------------

// Example: you can also apply validation middleware per-route (see below)
app.use('/api/auth', userRouter);

// ------------- Error handling -------------
app.use(errormiddleware)


// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

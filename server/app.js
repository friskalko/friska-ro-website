const path = require('path');
const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const cookieParser = require('cookie-parser');
const AppError = require('./utils/AppError');
const globalErrorHandler = require('./controllers/errorController');
const cors = require('cors');
const productRouter = require('./routes/productRoutes');

const app = express();

app.use(cors());

// Development logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Limit requests from same API
// const limiter = rateLimit({
//     max: 100,
//     windowMs: 60 * 60 * 1000,
//     message: 'Too many requests from this IP, please try again in an hour!',
// });

// app.use('/api', limiter);
app.use((req, res, next) => {
    res.locals.user = undefined;
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// cookie parser
app.use(cookieParser());

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// Serving static files
app.use(express.static(`${__dirname}/public`));

// Test middleware
app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});

// 3) ROUTES
app.use('/api/products', productRouter);
app.use('*', (req, res, next) => {
    res.status(500).json({
        status: 'fail',
        message: 'route not defined',
    });
});

app.use(globalErrorHandler);

module.exports = app;

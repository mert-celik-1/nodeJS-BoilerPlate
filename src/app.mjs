import express from 'express';
import connectToDatabase from './utils/mongo.mjs';
import productRoutes from './routes/productRoutes.mjs';
import authRoutes from './routes/authRoutes.mjs';
import userRoutes from './routes/userRoutes.mjs';

import loadConfig from './utils/config.mjs';
import logger, { logEntry, logExit, logError } from './utils/logger.mjs';
import {errorHandler,promiseException, uncaughtException } from './middlewares/exceptionMiddleware.mjs';
import correlationIdMiddleware from './middlewares/correlationIdMiddleware.mjs';

await loadConfig()
await connectToDatabase(process.env.MONGO_URI)

const app = express();


app.use(correlationIdMiddleware);

app.use(logEntry);
app.use(express.json());
app.use(logExit);

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

app.use(errorHandler);
uncaughtException()
promiseException()

export default app;

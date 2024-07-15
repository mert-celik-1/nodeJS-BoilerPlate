import express from 'express';
import connectToDatabase from './utils/mongo.mjs';
import productRoutes from './routes/productRoutes.mjs';
import loadConfig from './utils/config.mjs';
import logger, { logEntry, logExit, logError } from './utils/logger.mjs';

await loadConfig()
await connectToDatabase(process.env.MONGO_URI)

const app = express();

app.use(logEntry);

app.use(express.json());

// Middleware to log method exit and handle errors
app.use(logExit);
app.use(logError);

// Error handling middleware
app.use((err, req, res, next) => {
    res.status(500).json({ error: err.message });
  });

app.use('/api/products', productRoutes);

export default app;

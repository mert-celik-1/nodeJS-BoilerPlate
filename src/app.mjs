import express from 'express';
import connectToDatabase from './utils/mongo.mjs';
import productRoutes from './routes/productRoutes.mjs';
import loadConfig from './utils/config.mjs';

await loadConfig()

await connectToDatabase(process.env.MONGO_URI)

const app = express();
app.use(express.json());

app.use('/api/products', productRoutes);

export default app;

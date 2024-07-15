import express from "express"
import mongoose from "mongoose"
import dotenv from 'dotenv'
import productRoutes from '../routes/productRoutes.mjs';


dotenv.config();

const app = express();
app.use(express.json());

console.log(process.env.MONGO_URI)

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected');
}).catch((err) => {
    console.error('MongoDB connection error:', err);
});

app.use('/api/products', productRoutes);

export default app;
import express from 'express';
import dotenv from 'dotenv';
import productRouter from './routes/product.js';
import clientRouter from './routes/client.js';
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3001;
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World');
});

// app.get('/products', async (req, res) => {
//   await connect();
// });

app.use('/products', productRouter);
app.use('/price', clientRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

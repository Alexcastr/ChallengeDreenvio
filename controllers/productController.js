import { connect, disconnect } from '../db.js';
import Product from '../models/Product.js';
import { matchedData, validationResult } from 'express-validator';

export const createProduct = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) return res.status(400).json(errors.array());
  const data = matchedData(req);

  try {
    await connect();

    const createProduct = await Product.create(data);

    console.log('Product created', createProduct);
    res.status(201).json({ message: 'Product created', data: createProduct });
  } catch (error) {
    console.log('Error', error);
    res.status(500).json({ message: 'Product not created', data: error });
  } finally {
    await disconnect();
  }
};

export const getAllProducts = async (req, res) => {
  try {
    await connect();
    const products = await Product.find({
      inStock: true
    });

    res.status(200).json({ message: 'Products found', data: products });
  } catch (error) {
    console.log('Error', error);
    res.status(500).json({ message: 'Products not found', data: error });
  } finally {
    await disconnect();
  }
};

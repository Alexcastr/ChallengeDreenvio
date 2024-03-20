import express from 'express';
import {
  createProduct,
  getAllProducts
} from '../controllers/productController.js';
import { checkSchema } from 'express-validator';
import { createProductValidationSchema } from '../utils/validationSchema.js';

const router = express.Router();

router.get('/', getAllProducts);
router.post('/', checkSchema(createProductValidationSchema), createProduct);

export default router;

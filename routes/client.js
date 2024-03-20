import express from 'express';

import {
  createClient,
  getSpecialPrice
} from '../controllers/clientController.js';
import { checkSchema, query } from 'express-validator';
import { createClientValidationSchema } from '../utils/validationSchema.js';
const router = express.Router();

router.get(
  '/:id',
  query('brand')
    .isString()
    .notEmpty()
    .withMessage('Must not be empty')
    .isLength({ min: 3, max: 10 })
    .withMessage('Must be at least 3-10 characters'),
  getSpecialPrice
);
router.post('/', checkSchema(createClientValidationSchema), createClient);

export default router;

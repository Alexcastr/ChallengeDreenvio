import express from 'express';
import {
  createClient,
  getSpecialPrice
} from '../controllers/clientController.js';

const router = express.Router();

router.get('/:id', getSpecialPrice);
router.post('/', createClient);

export default router;

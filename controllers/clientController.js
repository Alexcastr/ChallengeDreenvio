import { connect, disconnect } from '../db.js';
import Client from '../models/Client.js';
import Product from '../models/Product.js';
import isValidObjectId from '../utils/IsValidObjectId.js';
import { matchedData, validationResult } from 'express-validator';

export const createClient = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) return res.status(400).json(errors.array());
  const data = matchedData(req);

  try {
    await connect();

    const createClient = await Client.create(data);

    res.status(201).json({ message: 'Client created', data: createClient });
  } catch (error) {
    console.log('Error', error);
    res.status(500).json({ message: 'Client not created', data: error });
  } finally {
    await disconnect();
  }
};

export const getSpecialPrice = async (req, res) => {
  const id = req.params.id;

  if (!isValidObjectId(id)) {
    return res.status(400).json({ message: 'Invalid id' });
  }

  const result = validationResult(req);

  if (!result.isEmpty()) {
    return res.status(400).json(result.array());
  }

  const { brand } = matchedData(req);

  try {
    await connect();

    const clientFound = await Client.findById({ _id: id });

    if (!clientFound) {
      res.status(404).json({ message: 'client not found' });
    } else {
      const isBrand = clientFound.specialPricing.find(
        (item) => item.brand.toLowerCase() === brand.toLowerCase()
      );

      console.log('isBrand', isBrand);
      if (isBrand) {
        const specialPrice = isBrand.price;
        res
          .status(200)
          .json({ message: 'Special price found', data: specialPrice });
      } else {
        const productFound = await Product.findOne({
          brand: brand.toLowerCase()
        });

        console.log('productFound', productFound);
        if (!productFound) {
          res.status(404).json({ message: 'Product is not in the stock' });
        } else {
          res
            .status(200)
            .json({ message: 'Product found', data: productFound });
        }
      }
    }
  } catch (error) {
    console.log('Error', error);
    res.status(500).json({ message: 'Client not found', data: error });
  } finally {
    await disconnect();
  }
};

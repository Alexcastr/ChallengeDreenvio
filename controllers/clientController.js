import { connect, disconnect } from '../db.js';
import Client from '../models/Client.js';
import Product from '../models/Product.js';
import isValidObjectId from '../utils/IsValidObjectId.js';

export const createClient = async (req, res) => {
  // const { name, brand, price, inStock } = req.body;
  console.log('req.body', req.body);
  try {
    await connect();

    const createClient = await Client.create(req.body);

    console.log('Client created', createClient);
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
  const productBrand = req.query.brand;

  if (!isValidObjectId(id)) {
    return res.status(400).json({ message: 'Invalid id' });
  }

  if (!productBrand) {
    return res.status(400).json({ message: 'Brand is required' });
  }

  console.log('productBrand', productBrand);

  try {
    await connect();

    const clientFound = await Client.findById({ _id: id });

    if (!clientFound) {
      res.status(404).json({ message: 'client not found' });
    } else {
      const isBrand = clientFound.specialPricing.find(
        (item) => item.brand.toLowerCase() === productBrand.toLowerCase()
      );

      console.log('isBrand', isBrand);
      if (isBrand) {
        const specialPrice = isBrand.price;
        res
          .status(200)
          .json({ message: 'Special price found', data: specialPrice });
      } else {
        const productFound = await Product.findOne({
          brand: productBrand.toLowerCase()
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

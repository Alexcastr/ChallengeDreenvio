import mongoose from 'mongoose';

const ClientSchema = new mongoose.Schema({
  username: { type: String, required: true },
  specialPricing: [
    {
      brand: { type: String, required: true },
      price: { type: Number, required: true }
    }
  ]
});

const Client = mongoose.model('Client', ClientSchema);

export default Client;

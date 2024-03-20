import mongoose from 'mongoose';

const BrandSchema = new mongoose.Schema({
  brandName: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client',
    required: false
  }
});

export default Brand = mongoose.model('Brand', BrandSchema);

// const ObjectId = require('mongoose').Types.ObjectId;
import mongoose from 'mongoose';

const ObjectId = mongoose.Types.ObjectId;
// Validator function
function IsValidObjectId(id) {
  if (ObjectId.isValid(id)) {
    if (String(new ObjectId(id)) === id) return true;
    return false;
  }
  return false;
}

export default IsValidObjectId;

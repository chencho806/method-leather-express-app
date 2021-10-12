const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customSchema = new Schema({
    
    description: { type: String, required: true },
    img: { type: String, required: true },
  
    });
  
  
  
  module.exports = mongoose.model("Custom", customSchema);
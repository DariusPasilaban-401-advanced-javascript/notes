'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const RequestSchema = new Schema({
  // method: { type: String, required: true, enum: ['GET',]},
  text: { type: String, required: true },
  category: { type: String, required: true }
});

RequestSchema.pre('save', function () {

  console.log(this);
  this.text = this.text.toUpperCase();
});

module.exports = mongoose.model('Request', RequestSchema);
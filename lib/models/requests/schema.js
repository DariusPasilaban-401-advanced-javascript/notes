'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const RequestSchema = new Schema({
  method: { type: String, required: true, enum: ['GET, ']}
})
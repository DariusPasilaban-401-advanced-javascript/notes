'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const NoteSchema = new Schema({
  text: { type: String, required: true },
  category: { type: String, required: false },

});

const NoteModel = mongoose.model('Notes', Noteschema);


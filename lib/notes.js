'use strict';

// =============

const mongoose = require('mongoose');
const schema = require('./models/requests/schema.js')
const { Schema } = mongoose;
const NewNotes = new Schema({
  text: { type: String, required: true },
  category: { type: String, required: true }
});
const NoteModel = mongoose.model('Notes', NewNotes);
module.exports = NoteModel;

// =============




class Notes{

  constructor(args) {
    this.id = Math.floor(Math.random() * 1000);
    this.text = args.payload;
    this.category = args.category;
  }

  execute(action) {
    if (action === '--add' || action == '-a') {
      return this.add();
    } else if(action === '--delete' || action == '-d'){
        return this.delete();
    } else if(action === '--list' || action == '-l'){
      return this.list();
    }else {
      console.error('bad action');
    }
  };


  add() {
    // console.log('adding note', this.text);

    let newNote = new NoteModel({
      text: this.text,
      category: this.category,
    });
    newNote.save()
      .then(note => {
        console.log(note, 'is saved in mongo database');
      });

  }

  delete() {
    console.log('deleting note', this.text);
  }

  list() {
    // console.log('listing notes', this.text);

    NoteModel.find({})
  .then(data => {
    console.log(data);
  })

  }

}


module.exports = Notes;
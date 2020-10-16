'use strict';

// =============

const mongoose = require('mongoose');
// const schema = require('./model/notes-schema.js')
// const { Schema } = mongoose;
// const NewNotes = new Schema({
//   text: { type: String, required: true },
//   category: { type: String, required: true }
// });
// const NoteModel = mongoose.model('Notes', NewNotes);
// module.exports = NoteModel;



const RequestCollection = require('./model/notes-collection.js');
const RequestInterface = new RequestCollection();

// =============




class Notes{

  constructor(args) {
    this.id = Math.floor(Math.random() * 100);
    this.text = args.payload;
    this.category = args.category;
  }

  execute(action) {
    if (action === '--add' || action == '-a') {
      return RequestInterface.add(this);
    } else if(action === '--delete' || action == '-d'){
      const id = this.text;
        return RequestInterface.delete(id);
    } else if(action === '--list' || action == '-l'){
      return RequestInterface.list();
    }else {
      console.error('bad action');
    }
  };


  // add() {
  //   // console.log('adding note', this.text);

  //   let newNote = new NoteModel({
  //     text: this.text,
  //     category: this.category,
  //   });
  //   newNote.save()
  //     .then(note => {
  //       console.log(note, 'is saved in mongo database');
  //     });

  // }

  delete() {
    console.log('deleting note', this.text);
  }

  // list() {
  //   // console.log('listing notes', this.text);

  //   NoteModel.find({})
  // .then(data => {
  //   console.log(data);
  // })

  // }

}


module.exports = Notes;
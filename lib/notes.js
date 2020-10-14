'use strict';

class Notes{

  constructor(args) {
    this.id = Math.floor(Math.random() * 1000);
    this.text = args.payload;
  }

  execute(action) {
    if (action === '--add' || action == '-a') {
      return this.add();
    } else {
      console.error('bad action');
    }
  };


  add() {
    console.log('adding note', this.text);
  }

}






module.exports = Notes;
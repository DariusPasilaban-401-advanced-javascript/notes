'use strict';

const { listIndexes } = require('./notes-schema.js');
const RequestModel = require('./notes-schema.js');

class RequestCollection{

  constructor(){

    this.model = RequestModel;
  }


add(request){
  let newModel = new this.model(request);
  newModel.save()
    .then(note => {
      console.log(note, 'is saved in mongo database');
    });
  }

  list(){
    RequestModel.find({})
    .then(data => {
      console.log(data);
    })
  }

  
  delete(id){
    RequestModel.findByIdAndDelete(id, function (err) {
      if(err) console.log(err);
      console.log("Successful deletion");
    });

  }


}

module.exports = RequestCollection;


'use strict';

class Input{
  
  constructor(args){
    this.action = this.isValid(args[2]);
    this.payload = args[3];
  }
  


isValid(arg){

  if (arg === '--add' || arg === '-a') {

    return arg;

  } else {

    return null;

    }

  };

}



module.exports = Input;
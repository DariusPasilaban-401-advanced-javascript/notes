'use strict';

class Input{
  
  constructor(args){
    this.action = this.isValid(args[2]);
    this.payload = args[3];
    this.category = args[4];
  }
  


isValid(arg){

  if (arg === '--add' || arg === '-a') {

    return arg;

  } else if(arg === '--delete' || arg === '-d'){

    return arg;

  } else if(arg === '--list' || arg === '-l'){

    return arg;

  } else {

    return null;

    }

  };

}



module.exports = Input;
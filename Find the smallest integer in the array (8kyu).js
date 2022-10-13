\\ first way 
class SmallestIntegerFinder {
    findSmallestInt(args) {
    var t;
       for (var i=0; i < args.length; i++){
          if(args[i] <= args[0]){
              args[0]  = args[i];    
              t = args[i];
          }
        } return t;
    }
  }

  \\ second way 
  class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args)
    }
  }
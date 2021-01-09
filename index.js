function binaire(num){
    var numInMyloop= num;
    var nombreBinaire=[];
    for (var i = 0; i< numInMyloop; i++) {
      if(numInMyloop%2===1 ){
        nombreBinaire.push(1);
      }
      else if(numInMyloop%2===0 ){
        nombreBinaire.push(0);
      }
      numInMyloop-=numInMyloop/2
      numInMyloop=Math.floor(numInMyloop)
     ;
      console.log(numInMyloop)
      console.log(nombreBinaire.join(""))
    } 
}

binaire(77)
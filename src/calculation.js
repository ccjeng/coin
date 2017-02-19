var makeChange = function(total) {

  var coins = [1,5,10,50,100,500,1000];
  var count = 0;

  for (var a = 0; a <= total/coins[coins.length-6]; a++) {
    for (var b = 0; b <= total/coins[coins.length-5]; b++) {
      for (var c = 0; c <= total/coins[coins.length-6]; c++) {
        for (var d = 0; d <= total/coins[coins.length-3]; d++) {
          for (var e = 0; e <= total/coins[coins.length-2]; e++) {
            for (var f = 0; f <= total/coins[coins.length-1]; f++) {
                int z = a*coins[coins.length-6] + b*coins[coins.length-5] + 
                        c*coins[coins.length-4] + d*coins[coins.length-3] + 
                        e*coins[coins.length-2] + f*coins[coins.length-1];
                if(z == total) {        
                  count++;
                  console.log(a+'-'+b+'-'+c+'-'+d+'-'+e+'-'+f);
                } else if (z > total) {
                  break;
                }
            }
          }
        }
      }
    }
  }
  
  console.log(count);
  return count;
};

makeChange(10);



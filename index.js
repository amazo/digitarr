var shuffle = require('shuffle').shuffle

// '10000000'.length

len = 8

exports.calc = function(){

result = []

while(len > 0){
  
  len--;

  result.push(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

}

return result;
}

var index = require("./index.js");

var input;


var callback = function(err, data ) {
  if(err) {
    console.warn(data);
  } else {
    console.log(data);
  }
};
index.handler(input,null,callback);

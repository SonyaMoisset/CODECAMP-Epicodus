var pingPong = require('./ping-pong.js').pingPong;

var goal = prompt('What number would you like me to ping-pong up to?');
var result = pingPong(100);
result.forEach(function(element) {
  console.log(element);
});

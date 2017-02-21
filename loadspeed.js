var page = require('webpage').create(),
  system = require('system'),
  t, address;

// if (system.args.length === 1) {
//   console.log('Usage: loadspeed.js <some URL>');
//   phantom.exit();
// }

t = Date.now();
address = 'http://www.google.com';
page.open(address, function(status) {
  if (status !== 'success') {
    console.log('FAIL to load the address');
  } else {
    t = Date.now() - t;
    console.log('Loading ' + address);
    console.log('Loading time ' + t + ' msec');
    console.log(JSON.stringify(window.performance.timing));
  }
  phantom.exit();
});

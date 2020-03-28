const debug = require('debug')('potato:main')
const module1 = require('./module1');

(function() {
  for (let i = 0; i < 5; i++) {
    debug('call number ' + i);
  }
  module1();
})()

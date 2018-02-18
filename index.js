
const _ = require('lodash');


module.exports = function(bp) {

  bp.middlewares.load();

  bp.hear(/start|hi|بازگشت/i, (event, next) => {
    bp.bale.sendText(event.user,"test");
  });
  
};

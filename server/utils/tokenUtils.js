var jwt = require('jwt-simple');  
var config = require('../config');
var moment = require('moment');  

var tokenUtils = {};

tokenUtils.createToken = function(userId, ip) {  
  return jwt.encode(userId, config.TOKEN_SECRET);
  var currentTime = moment().unix();

  //update user data
  
};

tokenUtils.validateToken = function(token){
    var userId = jwt.decode(userId, config.TOKEN_SECRET);
    //get the user data
}

tokenUtils.destroyToken = function(token){
    var userId = jwt.decode(userId, config.TOKEN_SECRET);
    //clear data

}

module.exports = tokenUtils;
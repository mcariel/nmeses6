'use strict';

var util = require('util');

module.exports = {
  hello: hello
};

function hello(req, res, next) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  var name = req.swagger.params.name.value || 'stranger';
  var hello = util.format('Hello, %s!', name);

  res.status(200).json({
    sucess: true,
    message: hello
  });

}
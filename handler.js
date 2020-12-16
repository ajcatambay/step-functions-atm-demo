'use strict';
const AWS = require('aws-sdk');
const stepFunctions = new AWS.StepFunctions();

module.exports.caller = (event, context, callback) => {

  const params = {
    stateMachineArn: 'arn:aws:states:ap-southeast-1:226320724014:stateMachine:ATMStateMachine',
    input: event.body
  };

  stepFunctions.startExecution(params, (err, data) => {
    if(err) {
      console.error(err);
      const response = {
        statusCode: 500,
        body: JSON.stringify(
          {
            message: 'An error occurred ' + err,
          }),
      };

      callback(null, response);
    } else {
        console.log(data)
        const response = {
          statusCode: 500,
          body: JSON.stringify(
            {
              message: 'Step function triggered',
              data: data
            }),
        };

        callback(null, response);
    }
  });

};

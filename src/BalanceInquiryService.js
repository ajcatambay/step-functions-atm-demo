"use strict"
const mockDB = require('./mockDB');

module.exports.balinq = (event, context, callback) => {
    const request = event.Input;
    let response = {};
    const accounts = mockDB.accounts;

    const message = `Your account balance is $ ${accounts[request.accountId].balance}.`
    console.log(message);
    response = {
        status: "SUCCESS",
        message: message
    }

    callback(null, response);
}
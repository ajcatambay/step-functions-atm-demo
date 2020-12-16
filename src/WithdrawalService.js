"use strict"
const mockDB = require('./mockDB');

module.exports.withdraw = (event, context, callback) => {
    const request = event.Input;
    let response = {};
    const accounts = mockDB.accounts;

    if(request.amount 
        && (request.amount <= accounts[request.accountId].balance)) {
        const newBalance = accounts[request.accountId].balance - request.amount;
        const message = `You have withdrawn $ ${request.amount}. Your new balance is $ ${newBalance}`;

        console.log(message);
        response = {
            status: "SUCCESS",
            message: message
        }
    } else {
        const message = `Insufficient balance.`;

        console.log(message);
        response = {
            status: "FAILED",
            message: message
        }
    }

    callback(null, response);
}
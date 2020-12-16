"use strict"
const mockDB = require('./mockDB');

module.exports.auth = (event, context, callback) => {
    const request = event.Input;
    let response = {};
    const accounts = mockDB.accounts;

    if (accounts[request.accountId] 
        && (accounts[request.accountId].pin === request.pin)) {
            const message = "Account is authenticated.";
            console.log(message);
            response = {
                isAuthenticated: true,
                status: "SUCCESS",
                message: message
            };
    } else {
        const message = "Invalid pin.";
        console.error(message);
        response = {
            isAuthenticated: false, 
            status: "FAILED",
            message: message
        };
    }

    callback(null, response);
}
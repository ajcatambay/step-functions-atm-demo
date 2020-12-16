'use strict'

const uuid = require('uuid');

module.exports.txnInit = (event, context, callback) => {
    console.log("Initializing transaction...");
    const metadata = {
        txnId: uuid.v1(),
        txnDateTime: new Date().toISOString()
    }

    callback(null, metadata);
}
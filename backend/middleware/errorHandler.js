const = {constants} = require('../constants');
const errorHandler = (err, req, res, next) => {
    const status = res.statusCode ? res.statusCode : 500;
    switch(statusCode){
        case 400:
            res.json({
                title: "Validation failed", 
                message: err.message, 
                stackTrace: err.stack
            });
            break;
        case 404:
            res.json({
                title: "Not found", 
                message: err.message,
                stackTrace: err.stack
            });
        default:
            break;
    }

};

module.exports = errorHandler;
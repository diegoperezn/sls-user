'use strict';

module.exports.list = async event => {
    return {
        statusCode: 200,
        body: JSON.stringify({
                message: 'Go Serverless v1.0! Your function executed successfully changed !',
            },
            null,
            2
        ),
    };
};


module.exports.create = async event => {
    return {
        statusCode: 200,
        body: JSON.stringify({
                message: 'Go Serverless v1.0! Your function executed successfully changed!',
            },
            null,
            2
        ),
    };
};

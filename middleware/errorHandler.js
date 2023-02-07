const {constants} = require('./constants')
const errorHandler = (err,req,res,next)=>{
    const statusCode= res.statusCode ? statusCode : 500;

    switch (statusCode){
        case constants.VALIDATION_ERROR:
            res.json({title:"Not Found",
             message :err.message
             ,stackTrace:err.stack
            });
            break;

        case constants.NOT_FOUND:
            res.json({title:"Validation Error",
             message :err.message,
             stackTrace:err.stack
            });
            break;
        case constants.UNAUTORIZED:
            res.json({title:"UnAutrized Error",
            message :err.message,
            stackTrace:err.stack
            });
            break;

            case constants.FORBIDDEN:
            res.json({title:"FORBIDDEN Error",
             message :err.message,
             stackTrace:err.stack
            });
            default:
                console.log("no error all good!")
            break;
            
        }
};
        
module.exports = errorHandler;
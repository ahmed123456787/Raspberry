const { exec } = require('child_process');
const pythonScriptPath = 'gas.py';

exports.prise = async (req, res, next) => {
    // Execute the Python script
    console.log("hello ahmed")   
    exec("./rf.sh",(error, stdout, stderr) => {       
        console.log(stdout) 
        res.status(200).json({
            message: "hello"
        })
        next();
    });
}
exports.gas = async (req, res, next) => {
    // Execute the Python script
    console.log("hello ahmed")   
    exec("./rf.sh",(error, stdout, stderr) => {       
        console.log(stdout) 
        res.status(200).json({
            message: "hello"
        })
        next();
    });
}

exports.gas = async (req, res, next) => {
    // Execute the Python script
    console.log("hello ahmed")   
    exec("./rf.sh",(error, stdout, stderr) => {       
        console.log(stdout) 
        res.status(200).json({
            message: "hello"
        })
        next();
    });
}
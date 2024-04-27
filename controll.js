const { exec } = require('child_process');


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
    exec("python ./sensors/gas.py",(error, stdout, stderr) => {       
        console.log(stdout) 
        res.status(200).json({
            message: "hello"
        })
        next();
    });
}
 
exports.temp = async (req, res, next) => {
    // Execute the Python script
    console.log("hello ahmed")
    exec("python ./sensors/temp.py", (error, stdout, stderr) => {
        console.log(error)
        res.status(200).json({
            message: "hello"
        })
        next();
    });
}
exports.light = async (req, res, next) => {
    // Execute the Python script
    console.log("hello ahmed")
    exec("python ./sensors/temp.py", (error, stdout, stderr) => {
        console.log(stdout)
        res.status(200).json({
            message: "hello"
        })
        next();
    });
}

const { exec } = require('child_process');


exports.prise = async (req, res, next) => {
    // Execute the Python script
    console.log("hello ahmed prise")   
    console.log(req.body)
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
    console.log(req.body)
    console.log("hello ahmed gas")   
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
    console.log("hello ahmed light")
    exec("python ./sensors/temp.py", (error, stdout, stderr) => {
        console.log(stdout)
        res.status(200).json({
            message: "hello"
        })
        next();
    });
}

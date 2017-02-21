var child_process = require('child_process');
var path = require('path');
var exec = child_process.exec;


exports.handler = (event, context, callback) => {
    // Set the path as described here: https://aws.amazon.com/blogs/compute/running-executables-in-aws-lambda/
    process.env['PATH'] = process.env['PATH'] + ':' + process.env['LAMBDA_TASK_ROOT'];

    var phantomPath = path.join(__dirname, 'phantomjs-2.1.1-linux-x86_64');

    // build the cmd for phantom to render the url
    const cmd = `${phantomPath} loadspeed.js`; // eslint-disable-line max-len


    // run the phantomjs command
    exec(cmd, (error, stdout, stderr) => {
        if (error) {
            // the command failed (non-zero), fail the entire call
            console.warn(`exec error: ${error}`, stdout, stderr);
            console.log(`stdouterror: ${stdout}`);
            callback(new Error('Test failed!'));
        } else {

            console.log(`${stdout}`);
            //console.log(`stderr: ${stderr}`);
            callback(null, `${cmd}  submitted!`);

        }
    });

};

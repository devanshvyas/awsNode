const express = require('express')
var routes = express.Router();

const fs = require('fs');
const AWS = require('aws-sdk');
const s3 = new AWS.S3({
  accessKeyId: 'AKIAZCXEXFB7A3ZEVHX4',
  secretAccessKey: ''
});

routes.post('/login', function(req,res) {
    console.log(req.body)
    res.send('hey')
}
);

routes.post('/upload', function(req,res) {
    fs.read('temp.txt', function(error,data) {
        if (error) {
            res.status(400); 
        } else {
            params = {Bucket: 'lambda.tutorial', Key: 'textFile', Body: data};
            s3.putObject(params, function(err,data) {
                if (err) {
                    console.log(err)
                } else {
                    console.log("Successfully uploaded data to myBucket/myKey");
                }
            });
        }

    })
});

module.exports = routes;

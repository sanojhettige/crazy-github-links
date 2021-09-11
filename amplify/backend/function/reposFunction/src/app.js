/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/


/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	STORAGE_CRAZYLINKSTABLE_ARN
	STORAGE_CRAZYLINKSTABLE_NAME
	STORAGE_CRAZYLINKSTABLE_STREAMARN
Amplify Params - DO NOT EDIT */

var express = require('express')
var bodyParser = require('body-parser')
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

// declare a new express app
var app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});

const AWS = require('aws-sdk')
const dynamodb = new AWS.DynamoDB.DocumentClient();
let tableName = "crazylinkstable-dev";

// generate random id
function id () {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

const datetime = new Date().toISOString();

const getRecentReposArray = data => {
  return data?.slice(-20)
}

app.get('/repos', function(req, res) {
  let params = {
    TableName: tableName,
    Key: {
      status_id: 1
    }
  }
  dynamodb.scan(params, (error, result) => {
    if (error) {
      res.json({ statusCode: 500, error: error.message });
    } else {
      const items = getRecentReposArray(result.Items);
      res.json({ statusCode: 200, url: req.url, data: items })
    }
  });
});

app.get('/repos/:id', function(req, res) {
  let params = {
    TableName: tableName,
    Key: {
      id: req.params.id
    }
  }
  dynamodb.get(params, (error, result) => {
    if (error) {
      res.json({ statusCode: 500, error: error.message });
    } else {
      res.json({ statusCode: 200, url: req.url, data: result.Item })
    }
  });
});


app.post('/repos', function(req, res) {
  const recordId = id();
  var params = {
    TableName: tableName,
    Item: {
      id: recordId,
      repo_name: req.body.repo_name,
      author_name: req.body.author_name,
      theme_id: req.body.theme_id,
      icon_id: req.body.icon_id,
      avatar_url: req.body.avatar_url,
      created_at: datetime,
      status_id: 0
    }
  }

  dynamodb.put(params, function(err, data) {
    if (err) res.json({ statusCode: 500, ...err })
    else res.json({ statusCode: 200, id: recordId })
  })
});

app.put('/repos/:id', function(req, res) {
  var params = {
    TableName: tableName,
    Key:{
      id: req.params.id,
    },
    UpdateExpression: "set theme_id = :t, icon_id=:i, status_id = :s",
    ExpressionAttributeValues:{
        ":t": req.body.theme_id || 'primary',
        ":i": req.body.icon_id || 'star',
        ":s": 1,
    },
    ReturnValues:"UPDATED_NEW"
};

  dynamodb.update(params, (error, result) => {
    if (error) {
      res.json({ statusCode: 500, error: error.message, url: req.url });
    } else {
      res.json({ statusCode: 200, url: req.url, data: result.Attributes })
    }
  });
});


app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app

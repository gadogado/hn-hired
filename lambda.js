process.env.IN_LAMBDA = '1'
process.env.NODE_ENV = 'production'

const awsServerlessExpress = require('aws-serverless-express')
const app = require('./server')

const server = awsServerlessExpress.createServer(app)
exports.handler = (event, context) => awsServerlessExpress.proxy(server, event, context)

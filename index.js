const Controller = require('toto-api-controller');
const config = require('./config')

const getExpenses = require('./dlg/GetExpenses')

var apiName = "expenses"

const api = new Controller(apiName, config.config);

api.path('GET', '/node/expenses', getExpenses);

api.listen();
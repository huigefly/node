var configs = require('./configs_win');

var sqlClient = require('./DB/sqlClient');
sqlClient.init(configs.mysql());

// get account server config
var config = configs.account_server();

var as = require('./account_server');
as.start(config);

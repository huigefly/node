var HALL_IP = "127.0.0.1";
var HALL_CLIENT_PORT = 9001;
var ACCOUNT_PRI_KEY = "^&*#$%()@";
var LOCAL_IP = 'localhost';

exports.mysql = function () {
	return {
		HOST: '192.168.37.178',
		//                HOST:'120.77.56.190',
		USER: 'root',
		PSWD: 'asdfasdf',
		DB: 'doudou',
		PORT: 3306
	}
}

//账号服配置
exports.account_server = function () {
	return {
		CLIENT_PORT: 9000,
		HALL_IP: HALL_IP,
		HALL_CLIENT_PORT: HALL_CLIENT_PORT,
		ACCOUNT_PRI_KEY: ACCOUNT_PRI_KEY,

		//
		DEALDER_API_IP: LOCAL_IP,
		DEALDER_API_PORT: 12581,
		VERSION: '20190527',
		APP_WEB: 'http://fir.im/2f17',
	};
};

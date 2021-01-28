/**
 *  auth: liming
 *  date: 2020/08/25
 *  description: 所有的未配置项默认继承自config.default
 * @description 如果每个模块配置自身
 */

var config = {
    default: {
        entryPath: 'http://localhost', // 注册入口地址
        baseURL: '', // 接口ip+entryPort
    },
    master: {
        entryPath: '',
        baseURL: '',
        entryPort: '6750' //页面端口
    },
    login: {
        entryPath: '',//页面地址
        baseURL: '',
        entryPort: '6753'//页面端口
    },
}

function isObject(it) {
    return Object.prototype.toString.call(it) === '[object Object]';
}

function copy(item) {
    return JSON.parse(JSON.stringify(item));
}

function objectMap(it) {
    var res = {};
    for (var key in it) {
        if (isObject(it)) {
            res[key] = {};
            objectMap(it[key])
        } else {
            res[key] = (res[key] || res[key] == false || res[key] == 0) ? res[key] : it[key]; //默认来自default配置
        }
    }
    return res;
}


var defaultConfig = config.default;
delete config.default;

for (var key in config) {
    for (var k2 in defaultConfig) {
        if (isObject(config[key][k2])) {

            config[key][k2] = objectMap(config[key][k2])
        } else {
            if (config[key][k2] == undefined || config[key][k2] == '') config[key][k2] = copy(defaultConfig[k2])
        }
    }
}

exports.config = config;

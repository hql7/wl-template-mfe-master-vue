/**
 *  auth: liming
 *  date: 2020/08/25
 *  description: 所有的未配置项默认继承自config.default
 * @description 如果每个模块配置自身
 */

var config = {
    default: {
        baseURL: "/nginx", // 接口ip+entryPort
        entryPath: "" // 注册入口地址
    },
    master: {
        entryPath: '',
        baseURL: '',
        entryPort: '6750' //页面端口
    },
    webgl: {
        entryPath: '',
        baseURL: '',
        entryPort: '6751' //页面端口
    },
    admin: {
        entryPath: '', //页面地址
        baseURL: '',
        entryPort: '6759' //页面端口
    },
    books: {
        entryPath: '', //页面地址
        entryPort: '6758', //页面端口
        baseURL: '',
    },
    device: {
        entryPath: '', //页面地址
        baseURL: '',
        entryPort: '6752', //页面端口
        ws: {
            url: "/nginx/websocket",
            maxReconnectCount: 3
        }
    },
    login: {
        entryPath: '',//页面地址
        baseURL: '',
        entryPort: '6753'//页面端口
    },
    mms: {
        entryPath: '',//页面地址
        baseURL: '',
        entryPort: '6755'//页面端口
    },
    order: {
        entryPath: '',//页面地址
        baseURL: '',
        entryPort: '6756'//页面端口
    },
    user: {
        entryPath: '', //页面地址
        baseURL: '',
        editerPath: "/editor/index3d.html", // 编辑器地址
        entryPort: '6754'//页面端口
    },
    video: {
        //video模块下查询项目的接口 依赖 user模块的baseURL
        entryPath: '',//页面地址
        baseURL: '/live-nginx',
        entryPort: '6757',//页面端口
        ws: {  //websocket配置
            url: '/live-nginx/peony/websocket',
            maxReconnectCount: 3,
        },
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
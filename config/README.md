# configs目录说明

## env-config

运行地址和api地址配置
> 每个模块可单独配置，为空则使用default配置（需要后台支持跨域）
> 其中运行地址至少需要default配置，api地址可以连default也为空，则会走master应用下vue.config的代理

*** 发布到不同的线上环境需要手动更改env-config/index所加载的配置文件 ***

### 开发环境
dev.js

### 预上线环境
fat.js

### 正式环境
pro.js

## 注意
1. npm run serve no 文件夹名；可以运行除指定文件外的其他应用，打包命令同
2. 后续配置项设计需要考虑不从根目录开始，而进每个文件内执行命令的情况

## build.js
自动打包全部微应用

## install.js
1. 自动下载全部微应用
2. 已经存在node_modiles目录的微应用将跳过下载

```js
npm run init  // 使用npm下载

npm run cinit  // 使用cnpm下载

npm run yinit  // 使用yarn下载
```

## start.js
1. 自动运行所有微应用
2. 不经存在node_modiles目录的微应用将跳过运行

## deploy.js
1. 自动将所选应用下的dist内的文件发布至阿里云
2. 前提需要待发布的应用打包好生产dist目录



## bit格式配置与解析

## json配置数据格式

```js
    {
        "getType": "bit",
        "mode": 1,
        "ratio": "0.1",
        "tagId": 32,
        "digits": "Ron1Scom4,Ron2Scom4,Ron3Scom4",
        "tagName": "R0N1Scom4"
    }
```

> digits字段表示解析bit数据每一位对应哪个点，逗号分隔，有三个则解析数据中的三位，将后面5位遗弃，最多8个

后端在接到此类型配置项时，根据`digits`的逗号个数将此一条数据拆分成多条数据，拆分出来的多条数据除了`tagName`外都一样

```js
    {
        "getType": "bit",
        "mode": 1,
        "ratio": "0.1",
        "tagId": 32,
        "tagName": "Ron1Scom4"
    },
    {
        "getType": "bit",
        "mode": 1,
        "ratio": "0.1",
        "tagId": 32,
        "tagName": "Ron2Scom4"
    },
    {
        "getType": "bit",
        "mode": 1,
        "ratio": "0.1",
        "tagId": 32,
        "tagName": "Ron3Scom4"
    }
```

## 前端订阅数据格式

bit格式数据拆分出来的tag点位id相同，只订阅一条即可，ws返回数据增加一个字段`digits: Ron1Scom4,Ron2Scom4,Ron3Scom4`, 前端将接收到的数据根据此字段解析拆分至每个点位

## 设备绑定

虽然bit类型只有一个数据，但是代表1-8个实际点位，而经过后台拆分后的bit数据也变成了对应的1-8个点位，现场设备也要录入1-8个实际设备，因此将根据对照表绑定数据的难题转移到了tag点位和实际设备绑定的人员身上，而他们是一般是现场布置设备人员也是bit数据格式的定义人员。

> bit数据定义者也是实际设备录入者，因此最了解bit每一位代表的那一个实际设备

## 模型绑定

经过解析拆分后的bit点位和普通点位并无区别，在模型绑定中和绑定普通点位一样

## 模型订阅

同前端订阅规则一致

## 模型写操作

因为绑定的点已经拆分成具体的点，但传回的数据还需是代表1-8个点的bit数据，因此根据`此点的tagName`名对比字段`digits: Ron1Scom4,Ron2Scom4,Ron3Scom4`中在哪一位，改变bit数据中对应的哪一位传回即可
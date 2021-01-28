/**
 * @author weilan
 * @time 2020.05.20
 * @name 无需服务端获取的微应用
 */

// 无需登录身份的子应用
const noAuthApps = [
  {
    module: "subapp-login",
    defaultRegister: true,
    devEntry: "//localhost:6753",
    depEntry: "http://login.mfe.wlui.com.cn/",
    routerBase: "/login",
    data: [
      {
        id: "1",
        title: "login",
        icon: "el-icon-monitor",
        children: [
          {
            id: "1-1",
            title: "home",
            url: "/login"
          }
        ]
      }
    ]
  },
]

// 需要登陆身份但是和模块菜单授权无关的子应用
const nextAuthApps = [

]

export { noAuthApps, nextAuthApps };
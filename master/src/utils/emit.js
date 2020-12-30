import { Message } from "element-ui";
import store from "@/store";

/**
 * @name 退出登录
 */
const logout = () => {
  Message('退出登录')
}

/**
 * @name 路由异常错误处理，尝试解析一个异步组件时发生错误时，重新渲染目标页面
 */
const asynRouterRetry = (_router) => {
  _router.onError((error) => {
    const pattern = /Loading chunk (\S)+ failed/g;
    const isChunkLoadFailed = error.message.match(pattern);
    if (isChunkLoadFailed) {
      const fullPath = store.getters.active_router;
      // 直接进replace，异步组件还是没注册进来
      _router.replace(fullPath).then(() => {
        routerGo(fullPath);
      })
    }
  });
}

export default [
  logout,
  asynRouterRetry
]
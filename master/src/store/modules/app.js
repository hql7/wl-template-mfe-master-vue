export default {
  namespaced: true,
  state: {
    size: 20, // 分页 页大小
    token: "",
    loadline: false, // 加载线
    in_master_router: false, // 是否进入master路由
    is_index: true // 是否首页
  },
  mutations: {
    // 设置分页大小
    SET_PAGE_SIZE(state, data) {
      state.size = data;
    },
    // 设置token
    SET_TOKEN(state, data) {
      state.token = data;
    },
    // 设置加载线
    SET_LOADLINE(state, data) {
      state.loadline = data;
    },
    // 设置master路由
    SET_IS_MASTER_ROUTER(state, data) {
      state.in_master_router = data;
    },
    SET_IS_INDEX(state, data) {
      state.is_index = data;
    }
  },
  actions: {
    // 设置分页大小
    setPageSize({ commit }, data) {
      commit("SET_PAGE_SIZE", data);
    },
    // 设置token
    setToken({ commit }, data) {
      commit("SET_TOKEN", data);
    },
    // 设置加载线
    setLoadline({ commit }, data) {
      commit("SET_LOADLINE", data);
    },
    // 设置master路由
    setIsMasterRouter({ commit }, data) {
      commit("SET_IS_MASTER_ROUTER", data);
    },
    setIsIndex({ commit }, data) {
      commit("SET_IS_INDEX", data);
    }
  }
};

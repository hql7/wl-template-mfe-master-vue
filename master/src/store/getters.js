const getters = {
  menu: state => state.menu.menu,
  active_router: state => state.menu.active_router,
  is_collapse: state => state.menu.is_collapse,
  size: state => state.app.size,
  token: state => state.app.token,
  loadline: state => state.app.loadline,
  in_master_router: state => state.app.in_master_router,
  router_bases: state => state.appstore.router_bases,
  is_index: state => state.app.is_index
}

export default getters
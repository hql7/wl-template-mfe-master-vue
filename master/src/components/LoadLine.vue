<template>
  <el-progress
    v-show="layout"
    :percentage="progressNum"
    :show-text="false"
    :stroke-width="4"
    class="load-line"
    color="#43caca"
  ></el-progress>
</template>

<script>
import { mapGetters } from "vuex"; // 引入状态共享

export default {
  name: "LoadLine",
  data() {
    return {
      layout: false,
      progressNum: 0,
      timer: null
    };
  },
  computed: {
    // 导入vuex菜单数据，菜单折叠状态
    ...mapGetters(["loadline"])
  },
  watch: {
    loadline(val) {
      if (val) {
        this.layout = val;
        this.init();
        return;
      }
      this.finish();
    }
  },
  methods: {
    // 初始化
    init() {
      if (this.timer) {
        clearInterval(this.timer);
      }
      this.layout = true;
      this.progressNum = 0;
      this.timer = setInterval(() => {
        this.progressNum += 25;
        if (this.progressNum >= 75) {
          clearInterval(this.timer);
        }
      }, 100);
    },
    // 结束
    finish() {
      this.progressNum = 100;
      clearInterval(this.timer);
      this.$nextTick(() => {
        this.layout = false;
      });
    }
  },
  beforeDestroy() {
    clearInterval(this.timer);
    this.timer = null;
  }
};
</script>

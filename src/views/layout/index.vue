<template>
  <el-container class="layout-container">
    <el-aside
      class="aside"
      width="200px"
    >
      <app-aside class="aside-menu"/>
    </el-aside>
    <el-container>
      <el-header class="header">Header</el-header>
      <el-main class="main">
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import AppAside from './components/aside'

export default {
  name: 'LayoutIndex',
  components: {
    AppAside
  },
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {

  }
}
</script>

<style scoped lang="less">
.aside {
  background-color: antiquewhite;
}
.header {
  background-color: lightcyan;
}
.main {
  background-color: #E9EEF3;
}
.layout-container {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.aside-menu {
  height: 100%;
}
</style>

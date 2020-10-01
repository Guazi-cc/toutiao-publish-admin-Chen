<template>
  <el-container class="layout-container">
    <el-aside
      class="aside"
      width="200px"
    >
      <app-aside class="aside-menu"/>
    </el-aside>
    <el-container>
      <el-header class="header">
        <div>
          <i class="el-icon-s-fold"></i>
          <span>哈哈哈</span>
        </div>
        <el-dropdown>
          <div class="avatar-wrap">
            <img class="avatar" src="https://chen-test-01-img.oss-cn-beijing.aliyuncs.com/img/36dddafb-41db-402f-8caf-00e0fc5255ac.jpg" alt="image">
            用户名
            <i class="el-icon-arrow-down el-icon--right"></i>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>设置</el-dropdown-item>
            <el-dropdown-item>注销</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-main class="main">
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import AppAside from './components/aside'
import { getUserProfile } from '@/api/user'

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
  created () {
    // 组件初始化好，请求获取资料
    this.loadUserProfile()
  },
  mounted () {},
  methods: {
    // 除了登录接口，其他所有接口都需要授权才能请求使用
    // 或者说，除了登录接口，其他接口都需要提供你的身份Token 才能获取数据
    loadUserProfile () {
      getUserProfile().then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style scoped lang="less">
.aside {
  background-color: antiquewhite;
}
.header {
  // background-color: lightcyan;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
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
.avatar-wrap {
  display: flex;
  align-items: center;
  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }
}
</style>

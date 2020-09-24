<template>
  <div class="login-container">
    <!--
      el-form 表单组件
      每个表单项都要使用 el-form-item 组件包装
    -->
    <div class="login-head"></div>
    <el-form class="login-form" ref="form" :model="user">
      <el-form-item>
        <el-input
          v-model="user.mobile"
          placeholder="请输入手机号"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="user.code"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="checked">我已同意</el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button
          class="login-btn"
          type="primary"
          @click="onLogin"
          :loading="loginLoading"
        >登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import request from '@/utils/request'

export default {
  name: 'LoginIndex',
  comments: {},
  props: {},
  data () {
    return {
      user: {
        mobile: '',
        code: ''
      },
      checked: false,
      loginLoading: false
    }
  },
  computed: {},
  watch: {},
  created () {

  },
  mounted () {
  },
  methods: {
    onLogin () {
      // 获取表单数据（根据服务端接口需求）
      const user = this.user

      // 表单验证

      // 验证通过提交请求

      // 开启登陆中 Loading....
      this.loginLoading = true

      request({
        method: 'POST',
        url: '/mp/v1_0/authorizations',
        // data 用来设置 POST 请求体
        data: user
      }).then(res => {
        console.log(res)
        this.$message({
          showClose: true,
          message: '登录成功',
          type: 'success'
        })
        this.loginLoading = false
      }).catch(err => {
        console.log('登录失败', err)
        this.$message({
          showClose: true,
          message: '恭喜你！登录失败',
          type: 'error'
        })
        this.loginLoading = false
      })
    }
  }
}
</script>

<style scoped>
.login-container {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url("./login_bg.jpg") no-repeat;
  background-size: cover;  /* cover图片短边全部显示出来 contain长边 */
}
.login-head {
  width: 300px;
  height: 57px;
  background: url("./logo_index.png") no-repeat;
  margin-bottom: 30px;
}
.login-form {
  background-color: #fff;
  padding: 50px;
  min-width: 300px;
}
.login-btn {
  width: 100%;
}
</style>

<template>
  <div class="login-container">
    <!--
      el-form 表单组件
      每个表单项都要使用 el-form-item 组件包装
    -->
    <div class="login-head"></div>
    <!--
      配置 form 表单验证
      1. 必须给 el-form 绑定 model 为表单数据对象
      2. 给需要验证的表单项 el-form-item 绑定 prop 属性
         注意：prop 属性需要指定表单对象中的数据名称
      3. 通过 el-form 的 rules属性配置验证规则

      手动触发表单验证
      1. 给 el-form 设置 ref 起个名字（随意，不可重复）
      2. 通过 ref 获取 el-form 组件，调用组件的 validate 方法进行验证
    -->
    <el-form
      class="login-form"
      ref="login-form"
      :model="user"
      :rules="formRules"
    >
      <el-form-item prop="mobile">
        <el-input
          v-model="user.mobile"
          placeholder="请输入手机号"
        ></el-input>
      </el-form-item>
      <el-form-item prop="code">
        <el-input
          v-model="user.code"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item prop="agree">
        <el-checkbox
          v-model="user.agree"
        >我已同意</el-checkbox>
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
// { login } 按需加载
import { login } from '@/api/user'

export default {
  name: 'LoginIndex',
  components: {},
  props: {},
  data () {
    return {
      user: {
        mobile: '13911111111',
        code: '246810',
        agree: false // 是否同意协议
      },
      loginLoading: false,
      formRules: { // 表单验证规则配置
        // 要验证的数据名称: [规则列表]
        mobile: [
          { required: true, message: '手机号不能为空', trigger: 'blur' },
          // pattern: 正则表达式
          { pattern: /^1[3|5|6|7|8|9]\d{9}$/, message: '手机号格式不正确', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '验证码不能为空', trigger: 'change' },
          { pattern: /^\d{6}$/, message: '请输入正确的验证码', trigger: 'blur' }
        ],
        agree: [
          {
            // 自定义校验规则
            // 验证通过: callback()
            // 验证失败: callback(new Error('错误消息')
            validator: (rule, value, callback) => {
              if (value) {
                callback()
              } else {
                callback(new Error('请同意用户协议!!'))
              }
            },
            trigger: 'blur'
          }
        ]
      }
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
      // const user = this.user
      // 表单验证
      this.$refs['login-form'].validate((valid, err) => {
        // 如果表单验证失败,停止提交请求
        if (!valid) {
          console.log(err) // 错误信息，不要也可
          return
        }
        // 验证通过，请求登录
        this.login()
      })
    },
    login () {
      // 验证通过提交请求
      // 开启登陆中 Loading....
      this.loginLoading = true

      // 对于代码中的请求操作
      // 1.接口请求可能需要重用
      // 2.实际开发中，接口非常容易搬动，改起来麻烦
      //   所以建议把所有的请求都封装成函数，然后统一的组织到模块中进行管理
      //   这样做的好处：管理维护更方便，便于重用
      login(this.user).then(res => {
        // console.log(res)
        this.$message({
          showClose: true,
          message: '登录成功',
          type: 'success'
        })
        this.loginLoading = false
        // 跳转到首页
        this.$router.push('/')
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

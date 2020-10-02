/**
 * 基于 axios 请求模块封装
 */

import axios from 'axios'

// 创建一个 axios 实例
// 通过这个实例去发送请求，把需要的配置给个这个实例
const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/' // 请求的基础路径
})

// 请求拦截器
request.interceptors.request.use(
  // 任何请求都会经过这里
  function (config) {
    // config 是当前请求相关的配置信息对象
    // config 是可以修改的
    // return 时请求才会发出去
    const user = JSON.parse(window.localStorage.getItem('user'))
    // 如果有用户登录信息则统一设置 Token
    if (user) {
      config.headers.Authorization = `Bearer ${user.token}`
    }
    // 允许在请求出去之前定制同意业务功能处理
    // 例如：统一设置 Token

    return config
  }, function (error) {
    // 请求失败会经过这里
    return Promise.reject(error)
  }
)

// 导出请求方法
// 谁要使用，谁就导入该模块
export default request

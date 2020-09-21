/**
 * 基于 axios 请求模块封装
 */

import axios from 'axios'

// 创建一个 axios 实例
// 通过这个实例去发送请求，把需要的配置给个这个实例
const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/' // 请求的基础路径
})

// 导出请求方法

// 谁要使用，谁就导入该模块
export default request

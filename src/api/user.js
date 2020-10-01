import request from '@/utils/request'

/**
 * 用户相关请求模块
 */

// 用户登录
export const login = data => {
  return request({
    method: 'POST',
    url: '/mp/v1_0/authorizations',
    // data 用来设置 POST 请求体
    data
  })
}
// 获取用户信息
export const getUserProfile = () => {
  return request({
    method: 'GET',
    url: '/mp/v1_0/user/profile',
    // 后端要求把需要授权的用户身份信息设置到请求头中
    // axios 可以在header 中设置请求头
    headers: {
      // 属性名按照接口要求
      Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MzI5OTMxNTQsInVzZXJfaWQiOjEsInJlZnJlc2giOmZhbHNlLCJ2ZXJpZmllZCI6dHJ1ZX0.h1hYqk12azSSpeVaHuGF71167Ne6yx3A7ZKenYCsHkI'
    }
  })
}
// 修改用户信息

/*
 * @Author       : liulib
 * @Date         : 2020-07-21 11:05:10
 * @LastEditors  : liulib
 * @LastEditTime : 2020-07-22 01:16:31
 * uni.request封装
 * 请求拦截、响应拦截、错误统一处理
 */

export const myRequest = (options) => {
  return new Promise((resolve, reject) => {
    uni.request({
      url: options.url,
      method: options.method || 'GET',
      data: options.data || {},
      success: (res) => {
        if (res.statusCode === 200) {
          resolve(res)
        } else {
          uni.showToast('请求出错')
        }
      },
      fail: (err) => {
        reject(err)
        uni.showToast('请求出错')
      },
    })
  })
}

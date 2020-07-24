<!--
 * @Author       : liulib
 * @Date         : 2020-07-20 17:29:15
 * @LastEditors  : liulib
 * @LastEditTime : 2020-07-25 00:57:52
--> 
<template>
  <view class="content">
    <!-- 个人信息 -->
    <view class="info">
      <view class="pi">
        <!-- 头像 -->
        <view class="head">
          <cover-image :src="avatarUrl" v-if="avatarUrl"></cover-image>
          <text v-else>未登录</text>
        </view>
        <!-- 用户名 -->
        <view class="name">
          <text>{{nickName}}</text>
        </view>
      </view>
    </view>
    <!-- 相关操作 -->
    <view class="operation">
      <view class="layout">
        <!-- 分享 -->
        <view>
          <cover-image src="../../static/icon/share.png"></cover-image>
          <text>分享给朋友</text>
          <cover-image src="../../static/icon/right_arrow.png"></cover-image>
        </view>
        <!-- 反馈 -->
        <view>
          <cover-image src="../../static/icon/write.png"></cover-image>
          <text>提交反馈</text>
          <cover-image src="../../static/icon/right_arrow.png"></cover-image>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      nickName: '',
      avatarUrl: '',
    }
  },
  onLoad() {
    // 显示loading
    uni.showLoading({
      title: '加载中',
    })
    // 获取用户信息
    uni.getUserInfo({
      provider: 'weixin',
      success: function (infoRes) {
        uni.setStorageSync('avatarUrl', infoRes.userInfo.avatarUrl)
        uni.setStorageSync('nickName', infoRes.userInfo.nickName)
      },
    })
    this.nickName = uni.getStorageSync('nickName')
    this.avatarUrl = uni.getStorageSync('avatarUrl')
    // 隐藏loading
    uni.hideLoading()
    // uni.login({
    //   provider: 'weixin',
    //   success: function(loginRes) {
    //     console.log(loginRes.code)
    //   }
    // })
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.content {
  .info {
    background-color: #040404;
    height: 50vh;
    color: #a0a0a0;
    text-align: center;
    position: relative;
    font-size: $uni-font-size-base;
    .pi {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      .head {
        width: 180rpx;
        height: 180rpx;
        line-height: 180rpx;
        border-radius: 50%;
        margin: 0 auto;
        background-color: #cccccc;
        color: #fff;
        text-align: center;
        cover-image {
          border-radius: 50%;
        }
      }
      .name {
        margin-top: 20rpx;
      }
    }
  }
  .operation {
    background-color: #f1f1f1;
    height: 50vh;
    padding-top: 50rpx;
    .layout {
      background-color: #fff;
      color: #8799a3;
      margin: 0 30rpx;
      border-radius: 15rpx;
      view {
        padding: 30rpx;
        display: flex;
        align-items: center;
        font-size: $uni-font-size-base;
        cover-image {
          width: 28rpx;
          height: 28rpx;
        }
        text {
          flex: 1;
          margin-left: 20rpx;
        }
      }
    }
  }
}
</style>
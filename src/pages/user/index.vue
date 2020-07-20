<!--
 * @Author       : liulib
 * @Date         : 2020-07-20 17:29:15
 * @LastEditors  : liulib
 * @LastEditTime : 2020-07-20 17:29:26
--> 
<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view>
      <text class="title">{{title}}</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: 'Hello'
    }
  },
  onLoad() {},
  methods: {}
}
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin: 200rpx auto 50rpx auto;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
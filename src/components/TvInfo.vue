<!--
 * @Author       : liulib
 * @Date         : 2020-07-23 14:41:07
 * @LastEditors  : liulib
 * @LastEditTime : 2020-07-25 00:11:26
--> 
<template>
  <view class="content">
    <view class="tvInfo" @click="clickTv">
      <cover-image :src="tvInfo.pic" />
      <!-- 状态信息 -->
      <view class="state">
        <text>{{tvInfo.state}}</text>
      </view>
      <!-- 评分 -->
      <view class="score">
        <text>{{tvInfo.pf|| '无评分'}}</text>
      </view>
      <!-- 剧名 -->
      <view class="name">
        <text>{{tvInfo.name}}</text>
      </view>
    </view>
  </view>
</template>
  
<script>
export default {
  props: {
    tvInfo: Object,
  },
  created() {},
  methods: {
    // 点击跳转到详情页
    clickTv() {
      console.log('被点击了')
      uni.navigateTo({
        url: `/pages/detail/index?id=${this.tvInfo.id}`,
      })
    },
  },
}
</script>
  
<style lang="scss" scoped>
.tvInfo {
  position: relative;
  cover-image {
    width: 200rpx;
    height: 300rpx;
    border-radius: 10rpx;
  }
  .state {
    width: 200rpx;
    position: absolute;
    border-radius: 0 0 10rpx 10rpx;
    bottom: 30rpx;
    color: #fff;
    font-size: 20rpx;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 20rpx 0;
    background: rgba(0, 0, 0, 0.2);
    text-align: center;
  }
  .score {
    background-color: #e54d42;
    border-radius: 15rpx;
    padding: 3rpx 10rpx;
    color: #fff;
    position: absolute;
    top: 0;
    right: 0;
  }
  .name {
    width: 200rpx;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
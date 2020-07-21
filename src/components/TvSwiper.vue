<!--
 * @Author       : liulib
 * @Date         : 2020-07-21 01:04:23
 * @LastEditors  : liulib
 * @LastEditTime : 2020-07-21 21:43:53
--> 
<template>
  <view class="content">
    <!-- title -->
    <view class="title">
      <text>{{tvData.title}}</text>
      <a href>更多 &gt;</a>
    </view>
    <!-- 轮播图 -->
    <scroll-view class="scroll-view_H" scroll-x="true" scroll-left="120">
      <view v-for="item in tvData.list" :key="item.id" class="scroll-item">
        <cover-image :src="item.pic" />
        <!-- 状态信息 -->
        <view class="state">
          <text>{{item.state}}</text>
        </view>
        <!-- 剧名 -->
        <view class="name">
          <text>{{item.name}}</text>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  props: {
    tvData: Object
  },
  data() {
    return {}
  },
  onLoad() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.content {
  .title {
    display: flex;
    padding: 20rpx;
    justify-content: space-between;
    font-size: $uni-font-size-base;
    a {
      color: #e54d42;
    }
  }
  .scroll-view_H {
    white-space: nowrap;
    .scroll-item {
      display: inline-block;
      position: relative;
      font-size: $uni-font-size-sm;
      width: 200rpx;
      margin: 10rpx;
      cover-image {
        width: 200rpx;
        height: 300rpx;
        border-radius: 10rpx;
        background: linear-gradient(#fff 80%, #000 100%);
      }
      .state {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 50rpx;
        color: #fff;
        font-size: 20rpx;
      }
      .name {
        width: 200rpx;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>
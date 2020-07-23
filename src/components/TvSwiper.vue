<!--
 * @Author       : liulib
 * @Date         : 2020-07-21 01:04:23
 * @LastEditors  : liulib
 * @LastEditTime : 2020-07-23 16:19:27
--> 
<template>
  <view class="content">
    <!-- title -->
    <view class="title">
      <text>{{tvList.title}}</text>
      <navigator url="/pages/category/index" open-type="switchTab">更多 &gt;</navigator>
    </view>
    <!-- 轮播图 -->
    <scroll-view class="scroll-view_H" scroll-x="true" scroll-left="120">
      <view class="scroll-container">
        <view v-for="item in tvList.list" :key="item.id" class="scroll-item">
          <!-- TvInfo组件 -->
          <TvInfo :tvInfo="item"></TvInfo>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
import TvInfo from '../components/TvInfo'
export default {
  props: {
    tvList: Object
  },
  components: { TvInfo },
  data() {
    return {}
  },
  created() {},
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
    navigator {
      color: #e54d42;
    }
  }
  .scroll-view_H {
    white-space: nowrap;
    .scroll-container {
      display: flex;
      .scroll-item {
        font-size: $uni-font-size-sm;
        width: 200rpx;
        margin: 10rpx;
        .tvInfo {
          position: relative;
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
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
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
      }
    }
  }
}
</style>
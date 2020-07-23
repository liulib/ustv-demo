<!--
 * @Author       : liulib
 * @Date         : 2020-07-23 13:25:11
 * @LastEditors  : liulib
 * @LastEditTime : 2020-07-24 00:08:39
--> 
<template>
  <view class="content">
    <!-- 图片信息 -->
    <view class="pic" :style="{backgroundImage: `url(${tvDetail.pic})`}">
      <cover-image :src="tvDetail.pic"></cover-image>
      <view class="info">
        <text>{{tvDetail.name}}</text>
        <text>年份：{{tvDetail.year}}</text>
        <text>集数：{{tvDetail.state}}</text>
        <text>导演：{{tvDetail.daoyan}}</text>
        <text>主演：{{tvDetail.zhuyan}}</text>
        <text>类型：{{tvDetail.type}}</text>
      </view>
    </view>
    <!-- 豆瓣评分 -->
    <view class="douban">
      <view class="douban-left">豆瓣</view>
      <view class="douban-right">{{tvDetail.pf}}</view>
    </view>
    <!-- 简介 -->
    <view class="brief">
      <view class="bTitle">简介</view>
      <view class="briefInfo">
        <text>{{tvDetail.text||"无简介信息"}}</text>
      </view>
    </view>
    <!-- 片段 -->
    <view class="episode">
      <view class="bTitle">剧集</view>
      <view class="episodeInfo">
        <view v-for="item in tvDetail.zu[0].ji" :key="item.id">{{item.name}}</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      tvDetail: {}
    }
  },
  onLoad: function(option) {
    this._getTvById({ id: option.id })
  },
  methods: {
    // 根据ID获取剧集详细信息
    async _getTvById(id) {
      try {
        const res = await this.$myRequest({
          url: 'https://api.bjxkhc.com/index.php/app/ios/vod/show',
          data: id
        })
        // TvDetail数据
        this.tvDetail = res.data.data
        console.log(this.tvDetail)
      } catch (error) {
        uni.showToast(error)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  .pic {
    height: 400rpx;
    background-size: 750rpx;
    background-position: 50% 50%;
    position: relative;
    cover-image {
      height: 330rpx;
      width: 230rpx;
      position: absolute;
      left: 20rpx;
      top: 20rpx;
    }
    .info {
      padding: 50rpx 50rpx 0 270rpx;
      height: 350rpx;
      background: rgba(0, 0, 0, 0.5);
      color: #fff;
      font-size: $uni-font-size-base;
      display: flex;
      flex-direction: column;
      &:first-child {
        font-size: $uni-font-size-lg;
      }
      text {
        margin-bottom: 10rpx;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
  .douban {
    display: flex;
    padding: 30rpx;
    .douban-left {
      background-color: #333333;
      color: #fff;
      border-radius: 30% 0 0 30%;
      padding: 10rpx;
    }
    .douban-right {
      color: #000;
      border-radius: 0 30% 30% 0;
      border: 1rpx solid #000;
      padding: 10rpx;
    }
  }
  .brief {
    color: #999999;
    padding: 30rpx;
    .briefInfo {
      padding: 30rpx 0;
      text-indent: 1em;
    }
  }
  .episode {
    padding: 30rpx;
    .episodeInfo {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      margin-top: 30rpx;
      view {
        flex: 0 0 18%;
        background-color: #333333;
        color: #f4f4f4;
        border-radius: 10rpx;
        margin: 10rpx 7rpx;
        font-size: $uni-font-size-sm;
        text-align: center;
        box-sizing: border-box;
        width: 120rpx;
        height: 60rpx;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  .bTitle {
    border-left: 8rpx solid #000;
    padding-left: 30rpx;
  }
}
</style>
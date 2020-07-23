<!--
 * @Author       : liulib
 * @Date         : 2020-07-20 17:16:27
 * @LastEditors  : liulib
 * @LastEditTime : 2020-07-22 16:34:45
--> 
<template>
  <view class="content">
    <!-- search-bar -->
    <view class="searchBar">
      <input placeholder="搜索" />
    </view>
    <!-- 轮播图 -->
    <swiper class="swiper" autoplay indicator-dots :indicator-active-color="'#ff0000'">
      <swiper-item v-for="item in bannerList" :key="item.workId">
        <cover-image :src="item.img" mode="aspectFill" />
        <text>{{item.title}}</text>
      </swiper-item>
    </swiper>
    <!-- 最近更新 -->
    <tvSwiper :tvData="recentData"></tvSwiper>
    <!-- 美剧榜 -->
    <tvSwiper :tvData="rankData"></tvSwiper>
    <!-- 经典推荐 -->
    <tvSwiper :tvData="classicData"></tvSwiper>
  </view>
</template>

<script>
import tvSwiper from '../../components/TvSwiper'
// import { myRequest } from '../../utils/http'
export default {
  components: {
    tvSwiper
  },
  data() {
    return {
      // 轮播图
      bannerList: [],
      // 最近更新
      recentData: {
        title: '最近更新',
        list: []
      },
      // 美剧榜
      rankData: {
        title: '美剧榜',
        list: []
      },
      // 经典推荐
      classicData: {
        title: '经典推荐',
        list: []
      }
    }
  },
  onLoad() {
    // this._getBanner()
    // this._getRecent()
    // this._getRecommend()
  },
  methods: {
    search() {},
    //  获取banner数据
    async _getBanner() {
      try {
        const res = await this.$myRequest({
          url:
            'https://api.gankers.xyz/hanju/config/queryByKey?key=meiju_banner'
        })
        // banner数据
        this.bannerList = res.data.data
        console.log(res)
      } catch (error) {
        uni.showToast(error)
      }
    },
    // 获取最近更新数据
    async _getRecent() {
      try {
        const res = await this.$myRequest({
          url:
            'https://api.bjxkhc.com/index.php/app/ios/vod/index?size=10&page=1&desc=updateTime&diqu=%E7%BE%8E%E5%9B%BD'
        })
        // recent数据
        this.recentData.list = res.data.data
        console.log(this.recentData)
      } catch (error) {
        uni.showToast(error)
      }
    },
    // 获取美剧榜和经典推荐
    async _getRecommend() {
      try {
        const res = await this.$myRequest({
          url:
            'https://api.gankers.xyz/hanju/config/queryByKey?key=meiju_tuijian'
        })
        console.log(res)
        // rank数据
        this.rankData.list = res.data.data[0].list
        // classic数据
        this.classicData.list = res.data.data[1].list
      } catch (error) {
        uni.showToast(error)
      }
    }
  }
}

// uni.showToast({
//   icon: 'none',
//   title: '请求' + res.data.msg,
//   duration: 1500
// })
</script>

<style lang="scss" scoped>
.content {
  .searchBar {
    width: 100%;
    height: 100rpx;
    background-color: $base-color;
    display: flex;
    justify-content: center;
    align-items: center;
    input {
      width: 90%;
      background-color: #fff;
      height: 60rpx;
      outline-style: none;
      border: 1px solid #fff;
      border-radius: $uni-border-radius-lg;
      text-align: center;
      font-size: $uni-font-size-base;
    }
  }
  .swiper {
    height: 200px;
    swiper-item {
      position: relative;
      cover-image {
        width: 750rpx;
      }
      text {
        color: #fff;
        font-size: $uni-font-size-base;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 40rpx;
        white-space: nowrap;
      }
    }
  }
}
</style>

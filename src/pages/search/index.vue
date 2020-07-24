<!--
 * @Author       : liulib
 * @Date         : 2020-07-24 10:35:51
 * @LastEditors  : liulib
 * @LastEditTime : 2020-07-25 00:46:59
--> 
<template>
  <view class="content">
    <!-- 表单区域 -->
    <view class="form">
      <input class="uni-input" focus placeholder="搜索剧集、电影名称" v-model="queryInfo.key" />
      <button size="mini" type="warn" @click="_getSearchRes">搜索</button>
    </view>
    <!-- 搜索结果区域 -->
    <view class="result" v-if="searchResultList">
      <!-- Tv信息展示区域 -->
      <scroll-view scroll-y="true" class="scroll-Y" @scrolltolower="lower">
        <view class="scroll-warp">
          <!-- 剧集信息 -->
          <view v-for="item in searchResultList" :key="item.id" class="scroll-item">
            <!-- TvInfo组件 -->
            <TvInfo :tvInfo="item"></TvInfo>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<script>
import TvInfo from '../../components/TvInfo'
export default {
  data() {
    return {
      queryInfo: {
        size: 18,
        page: 1,
        key: '',
      },
      searchResultList: [],
    }
  },
  components: { TvInfo },
  onLoad() {},
  methods: {
    /**
     * @description: // 获取搜索结果 type用来判断是否是点击按钮调用，点击按钮调用将结果清空
     * @param {type} string
     * @return:
     */
    async _getSearchRes(type = '') {
      // 显示loading
      uni.showLoading({
        title: '加载中',
      })
      try {
        const res = await this.$myRequest({
          url: 'https://api.bjxkhc.com/index.php/app/ios/vod/index',
          data: this.queryInfo,
        })
        // 搜索结果数据 判断是否是重新搜索的
        if (type) {
          this.searchResultList = res.data.data
        } else {
          this.searchResultList = [...this.searchResultList, ...res.data.data]
        }
      } catch (error) {
        uni.showToast(error)
      }
      // 隐藏loading
      uni.hideLoading()
    },
    // 触底事件
    lower() {
      this.queryInfo.page++
      this._getSearchRes()
    },
  },
}
</script>

<style lang="scss" scoped>
.content {
  .form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20rpx 30rpx;
    input {
      width: 500rpx;
      background-color: #f5f5f5;
      border-radius: 5rpx;
      padding: 10rpx;
      font-size: $uni-font-size-base;
    }
    button {
      margin: 0;
      font-size: $uni-font-size-base;
    }
  }
  .result {
    .scroll-Y {
      height: calc(100vh - 100rpx);
      .scroll-warp {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        .scroll-item {
          position: relative;
          font-size: $uni-font-size-sm;
          width: 200rpx;
          margin: 10rpx;
        }
      }
    }
  }
}
</style>
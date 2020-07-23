<!--
 * @Author       : liulib
 * @Date         : 2020-07-20 17:29:08
 * @LastEditors  : liulib
 * @LastEditTime : 2020-07-23 15:14:44
--> 
<template>
  <view class="content">
    <!-- picker区域 -->
    <view class="pick-container">
      <!-- 地区选择器 -->
      <view class="picker-flex">
        <view>
          <text>地区</text>
        </view>
        <view class="pick-color">
          <picker @change="areaChange" :value="areaIndex" :range="areaArray">
            <view class="uni-input">{{"("+areaArray[areaIndex]+")"}}</view>
          </picker>
        </view>
        <view>
          <text>&#8744;</text>
        </view>
      </view>
      <!-- 标签选择器 -->
      <view class="picker-flex">
        <view>
          <text>标签</text>
        </view>
        <view class="pick-color">
          <picker @change="categoryChange" :value="categoryIndex" :range="categoryArray">
            <view class="uni-input">{{"("+categoryArray[categoryIndex]+")"}}</view>
          </picker>
        </view>
        <view>
          <text>&#8744;</text>
        </view>
      </view>
      <!-- 排序选择器 -->
      <view class="picker-flex">
        <view>
          <text>排序</text>
        </view>
        <view class="pick-color">
          <picker @change="sortChange" :value="sortIndex" :range="sortArray">
            <view class="uni-input">{{"("+sortArray[sortIndex]+")"}}</view>
          </picker>
        </view>
        <view>
          <text>&#8744;</text>
        </view>
      </view>
    </view>
    <!-- TvList展示区域 -->
    <view class="tv-container">
      <scroll-view scroll-y="true" class="scroll-Y" @scrolltolower="lower">
        <view class="scroll-warp">
          <!-- 剧集信息 -->
          <view v-for="item in TvList" :key="item.id" class="scroll-item">
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
      areaArray: ['全部', '美国', '韩国', '大陆'],
      areaIndex: 0,
      categoryArray: [
        '全部',
        '传记',
        '冒险',
        '剧情',
        '动作',
        '动画',
        '历史',
        '古装',
        '喜剧',
        '奇幻',
        '悬疑',
        '惊悚',
        '灾难',
        '爱情',
        '犯罪',
        '真人秀',
        '科幻',
        '纪录片',
        '同性',
        '音乐'
      ],
      categoryIndex: 0,
      sortArray: ['时间'],
      sortIndex: 0,
      queryInfo: {
        size: 18,
        page: 1,
        desc: 'updateTime',
        diqu: '',
        type: ''
      },
      TvList: []
    }
  },
  components: { TvInfo },
  onLoad() {
    this._getTvBycate()
  },
  methods: {
    areaChange: function(e) {
      this.areaIndex = e.target.value
      this.queryInfo.diqu = this.areaArray[this.areaIndex]
      this.queryInfo.page = 1
      this.TvList = []
      this._getTvBycate()
    },
    categoryChange: function(e) {
      this.categoryIndex = e.target.value
      this.queryInfo.type = this.categoryArray[this.areaIndex]
      this.queryInfo.page = 1
      this.TvList = []
      this._getTvBycate()
    },
    sortChange: function(e) {
      this.sortIndex = e.target.value
      this.queryInfo.desc = this.sortArray[this.areaIndex]
      this.queryInfo.page = 1
      this.TvList = []
      this._getTvBycate()
    },
    // 根据分类获取剧集数据
    async _getTvBycate() {
      try {
        const res = await this.$myRequest({
          url: 'https://api.bjxkhc.com/index.php/app/ios/vod/index',
          data: this.queryInfo
        })
        // TvList数据
        this.TvList = [...this.TvList, ...res.data.data]
        console.log(res)
      } catch (error) {
        uni.showToast(error)
      }
    },
    // 触底事件
    lower() {
      this.queryInfo.page++
      this._getTvBycate()
    }
  }
}
</script>

<style style lang="scss" scoped>
.content {
  .pick-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 70rpx;
    font-size: $uni-font-size-lg;
    height: 85rpx;
    .picker-flex {
      display: flex;
      .pick-color {
        margin-left: 10rpx;
        color: #e8645b;
      }
    }
  }
  .tv-container {
    .scroll-Y {
      height: calc(100vh - 85rpx);
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
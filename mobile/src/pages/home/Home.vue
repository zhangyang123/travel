<template>
   <div>
      <home-header></home-header>
      <home-swiper :list="swiperList"></home-swiper>
      <home-icons :list="iconList"></home-icons>
      <home-recommend :list="recommendList"></home-recommend>
      <home-weekend :list="weekendList"></home-weekend>
   </div>
</template>

<script>
   import homeHeader from './components/homeHeader'
   import homeSwiper from './components/homeSwiper'
   import homeIcons from './components/homeIcons'
   import homeRecommend from './components/homeRecommend'
   import homeWeekend from './components/homeWeekend'
   import axios from 'axios'
   import { mapState } from 'vuex'
   export default {
    name: 'home',
    data () {
       return {
          swiperList:[],
          iconList:[],
          recommendList:[],
          weekendList:[],
          lastCity:""
       }
    },
    components: {
       homeHeader,
       homeSwiper,
       homeIcons,
       homeRecommend,
       homeWeekend
    },
    methods:{
       getHomeInfo () {
          //axios.get(`/api/index.json?city=${this.city}`)
           axios.get(`/mock/index.json?city=${this.city}`).then(this.getHomeInfoSucc)
       },
       getHomeInfoSucc (res) {
          let data = res.data.data
          if(res.data.ret) {
              this.swiperList = data.swiperList;
              this.iconList = data.iconList;
              this.recommendList = data.recommendList;
              this.weekendList = data.weekendList
          }

       }
    },
    computed:{
       ...mapState(['city'])
    },
    mounted () {
       this.lastCity = this.city;
       this.getHomeInfo();
    },
    activated () {
       if(this.lastCity != this.city) {
           this.getHomeInfo();
       }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
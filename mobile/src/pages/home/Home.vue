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
          lastCity:"",
          homeData:{
             "ret": true,
             "list": {
                "city": "北京",
                "swiperList": [
                    {
                        "id": "001",
                        "imgUrl": "//mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/b59b8db9f72eb8f54df5bf2155672e9c.jpg"
                    },
                    {
                        "id": "002",
                        "imgUrl": "//h-des-activity-fecp.qunarzz.com/h_des_activity_fe_h_des_activity_fe/973dc1ae0da73a58410186df08ff25cb.jpg"
                    },
                    {
                        "id": "003",
                        "imgUrl": "//mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/a685001bbf5e77a203ff8815e953efbe.jpg_945x288_52b6ec01.jpg"
                    },
                    {
                        "id": "004",
                        "imgUrl": "//mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/d75097876425de8365684f0693b37fd3.jpg"
                    },
                    {
                        "id": "005",
                        "imgUrl": "//mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/3f5ff03fa0c024b930f515e63ae2c702.jpg_945x288_7dff4510.jpg"
                    }
                ],
                "iconList": [
                    {
                        "id": "001",
                        "imgUrl": "//s.qunarzz.com/travel/travel_hy2/2019/gonglue.png",
                        "desc": "攻略"
                    },
                    {
                        "id": "002",
                        "imgUrl": "//s.qunarzz.com/travel/travel_hy2/2019/bitiyan.png",
                        "desc": "旅行榜单"
                    },
                    {
                        "id": "003",
                        "imgUrl": "//s.qunarzz.com/travel/travel_hy2/2019/jingdian.png",
                        "desc": "景点"
                    },
                    {
                        "id": "004",
                        "imgUrl": "//s.qunarzz.com/travel/travel_hy2/2019/zhusu.png",
                        "desc": "酒店"
                    },
                    {
                        "id": "005",
                        "imgUrl": "//s.qunarzz.com/travel/travel_hy2/2019/tesetiyan.png",
                        "desc": "玩乐"
                    },
                    {
                        "id": "006",
                        "imgUrl": "//s.qunarzz.com/travel/travel_hy2/2019/tesecai.png",
                        "desc": "美食"
                    },
                    {
                        "id": "007",
                        "imgUrl": "//s.qunarzz.com/travel/travel_hy2/2019/gouwu.png",
                        "desc": "购物"
                    },
                    {
                        "id": "008",
                        "imgUrl": "//s.qunarzz.com/travel/travel_hy2/2019/luxian.png",
                        "desc": "路线"
                    },
                    {
                        "id": "009",
                        "imgUrl": "//s.qunarzz.com/travel/travel_hy2/2019/wenda.png",
                        "desc": "问答"
                    }
                ],
                "recommendList": [
                    {
                        "id": "001",
                        "imgUrl": "https://imgs.qunarzz.com/sight/p0/201309/24/977fea7b3c5cd758c8d65eac.jpg_280x200_342a45a3.jpg",
                        "title": "成都大熊猫繁育研究基地",
                        "desc": "成都周边观赏大熊猫最便利的地方，很多萌萌的大熊猫等着你哦。",
                        "price":"￥19.8"
                    },
                    {
                        "id": "002",
                        "imgUrl": "https://imgs.qunarzz.com/sight/p0/1411/7f/217db3ceea8fb7caceaa2d33c155d07d.water.jpg_280x200_d7ae6d8f.jpg",
                        "title": "宽窄巷子",
                        "desc": "喝茶泡吧、掏掏耳朵，吃吃火锅，感受成都人幸福的悠闲生活。",
                        "price":"￥12"
                    },
                    {
                        "id": "003",
                        "imgUrl": "https://imgs.qunarzz.com/sight/p0/201407/03/a584374ee80b738e2600d6bcaf1299e3.jpg_280x200_27dbc269.jpg",
                        "title": "都江堰景区",
                        "desc": "中国目前保存最完整的古代水利工程。",
                        "price":"￥40"
                    },
                    {
                        "id": "004",
                        "imgUrl": "https://imgs.qunarzz.com/sight/p0/201307/11/0d55f83bf6047391c8d65eac.jpg_280x200_c18e6f90.jpg",
                        "title": "锦里古街",
                        "desc": "成都最古老、最热闹繁华的商业街区，能品尝到众多的当地美食。",
                        "price":"￥54"
                    },
                    {
                        "id": "005",
                        "imgUrl": "https://imgs.qunarzz.com/sight/p0/1505/b0/b0132e78efa00572.water.jpg_280x200_d72a457e.jpg",
                        "title": "青城山",
                        "desc": "“青城天下幽”，这里是道教的发源地，山间有多处道观可探寻。",
                        "price":"￥40"
                    }
                ],
                "weekendList": [
                    {
                        "id": "001",
                        "imgUrl": "https://imgs.qunarzz.com/wugc/p189/201206/12/a3ace34bc010041193835fbb.jpg_280x200_1b4b36a3.jpg",
                        "title": "南山文化旅游区",
                        "desc": "108米的海上三面观音，三亚不容错过之旅"
                    },
                    {
                        "id": "002",
                        "imgUrl": "https://imgs.qunarzz.com/sight/p0/1811/2f/2f9b29981c3c9f85a3.img.jpg_280x200_6a3da54e.jpg",
                        "title": "蜈支洲岛",
                        "desc": "私人订制主取景地"
                    },
                    {
                        "id": "003",
                        "imgUrl": "https://imgs.qunarzz.com/sight/p0/1603/97/97a91e052b51aa9890.water.jpg_280x200_ba2a9853.jpg",
                        "title": "天涯海角",
                        "desc": "天之涯海之角，爱就陪Ta到天涯海角"
                    },
                    {
                        "id": "004",
                        "imgUrl": "https://imgs.qunarzz.com/sight/p0/1809/ff/ffc62d609a5c3521a3.img.jpg_280x200_5fb24028.jpg",
                        "title": "亚龙湾热带天堂森林公园",
                        "desc": "《非诚勿扰II》《亲爱的，热爱的》取景地"
                    },
                    {
                        "id": "005",
                        "imgUrl": "https://imgs.qunarzz.com/sight/p0/1812/93/93df8114ba3bbcf9a3.img.jpg_280x200_d4606f69.jpg",
                        "title": "鹿回头风景区",
                        "desc": "天南旅行乡，鹿回头爱情的圣地"
                    }
                ]
            }
        }

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
          // axios.get(`/mock/index.json?city=${this.city}`).then(this.getHomeInfoSucc)
          this.getHomeInfoSucc();
       },
       getHomeInfoSucc () {
          //let data = res.data.data
          if(this.homeData.ret) {
              this.swiperList = this.homeData.list.swiperList;
              this.iconList = this.homeData.list.iconList;
              this.recommendList = this.homeData.list.recommendList;
              this.weekendList = this.homeData.list.weekendList
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
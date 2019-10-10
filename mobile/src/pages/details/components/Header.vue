<template>
   <div>
       <router-link to="/">
       <div class="header-abs">
           <span class="iconfont backicon">&#xe600;</span>
       </div>
       </router-link>
       <div class="header-fixed" v-show="showScroll" :style="opacityStyle">
           南山文化旅游区（国家5A级景区）
       </div>
       
   </div>
</template>

<script>
   export default {
       data () {
          return {
             showScroll:false,
             opacityStyle:{
                opacity:0
             }
          }
       },
       methods:{
          handleScroll () {
             console.log('scroll');
             let top = document.documentElement.scrollTop;
             if(top > 60) {
                this.showScroll = true
                let opacity = top / 140;
                opacity > 1 ? 1 : opacity
                this.opacityStyle = { opacity }
             }else {
                this.showScroll = false
             }
          }
       },
       activated () {
          window.addEventListener("scroll",this.handleScroll)
       },
       deactivated () {
          window.removeEventListener("scroll",this.handleScroll)
       }
   }

</script>

<style lang="stylus">
   @import '../../../assets/style/varible.styl' 
   .header-abs
      position:absolute
      top:.40rem
      left:.30rem
      z-index:10
      width:.60rem
      height:.60rem
      color:#fff
      line-height:0
      text-align:center
      background:rgba(0,0,0,.8)
      border-radius(.60rem)
   .header-fixed
      position:fixed
      top:0
      left:0
      z-index:10
      width:100%
      height:.70rem
      font-size:14px
      color:#fff
      text-align:center
      line-height:.70rem
      background:bg 
    .header-content 
      height:80000px   

</style>
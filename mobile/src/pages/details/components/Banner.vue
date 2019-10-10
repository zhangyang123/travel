<template>
   <div>
	   <div class="banner" @click="loadGallary">
	      <img class="banner-img" src="https://imgs.qunarzz.com/wugc/p189/201206/12/a3ace34bc010041193835fbb.jpg_280x200_1b4b36a3.jpg">
	      <div class="banner-info">
	         <div class="banner-title">
	             南山文化旅游区（国家5A级景区）
	         </div>
	         <div class="banner-icon">
	            <img class="banner-icon-img" src="../../../assets/images/img.png">
	            {{imgs.length}}
	         </div>
	      </div>
	   </div>
	   <common-gallary v-show="showGallary" @close="handleGallaryClose" :imgs=imgs></common-gallary>
   </div>
</template>

<script>
    import commonGallary from '../../../common/gallary/Gallary'
    export default {
       data () {
          return {
             showGallary:false,
             imgs:["https://imgs.qunarzz.com/wugc/p189/201206/12/a3ace34bc010041193835fbb.jpg_280x200_1b4b36a3.jpg","https://imgs.qunarzz.com/sight/p0/1603/97/97a91e052b51aa9890.water.jpg_280x200_ba2a9853.jpg"]
          }
       },
       components:{
          commonGallary
       },
       methods:{
          loadGallary () {
             this.showGallary = true
          },
          handleGallaryClose () {
             this.showGallary = false
          }
       }

    }
</script>

<style lang="stylus" scoped>
    .banner
      position:relative
      padding-bottom:50%
      overflow:hidden
      height:0
      .banner-img
        display:block
        width:100%
        object-fit:cover
      .banner-info
        position:absolute
        left:0
        bottom:0 
        padding:0 .20rem
        width:100% 
        height:.60rem
        font-size:12px
        line-height:.60rem
        color:#fff
        box-sizing:border-box
        background: -webkit-linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.2))
      .banner-icon 
        position:absolute
        right:.20rem
        bottom:0
        width:2.0rem 
        height:100%
        text-align:right
        .banner-icon-img
          position:relative
          top:.05rem
          left:-.05rem
          width:16px
          height:16px
</style>
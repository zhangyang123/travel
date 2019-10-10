<template>
   <div class="container" @click="handleGallaryClick">
       <div class="wrapSwiper">
	       <swiper :options="swiperOption">
	          <div class="swiper-slide" v-for="(item,index) of imgs" :key="index" >
		          <img class="gallary-img" :src="item">
		      </div>
		      
		      <div class="swiper-pagination" slot="pagination"></div>
	       </swiper>
       </div>
   </div>
</template>

<script>
   export default {
       props:{
          imgs:{
             type:Array,
             default () {
                return []
             }
          }
       },
       data () {
          return {
             swiperOption: {
	             pagination: '.swiper-pagination',
	             paginationType : 'fraction',
	             observeParents:true,
	             observer:true,
	          }
          }
       },
       methods:{
          handleGallaryClick () {
             this.$emit("close")
          }
       }
   }
</script>

<style lang="stylus" scoped>
   .container >>> .swiper-container
     overflow:inherit
   .container
     position:fixed
     top:0
     right:0
     bottom:0
     left:0
     z-index:20
     display:flex
     flex-direction:column
     justify-content:center
     width:100%
     height:100%
     background:#000
     .gallary-img
       width:100%
     .swiper-pagination
        bottom:-30px
        font-size:20px
        color:#fff  
</style>
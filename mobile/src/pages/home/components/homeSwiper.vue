<template>
    <div class="wrapSwiper">
       <swiper :options="swiperOption" v-if="showSwiper">
          <div class="swiper-slide" v-for="item of list" :key="item.id">
	          <img class="swiper-img" :src="item.imgUrl">
	        </div>
	        <div class="swiper-pagination" slot="pagination"></div>
       </swiper>
    </div>
</template>

<script>
   export default {
      name:'homeSwiper',
      props:{
         list:Array
      },
      data () {
         return {
            swiperOption: {
	             loop: true,
               pagination: '.swiper-pagination'
	          }
         }  
      },
      computed:{
         showSwiper () {
            return this.list.length
         }
      }
   }
</script>

<style lang="stylus" scoped>
    .wrapSwiper >>> .swiper-container-horizontal > .swiper-pagination-bullets
      bottom:5px
      font-size:0
    .wrapSwiper >>> .swiper-pagination-bullet-active
      background:#fff
    .wrapSwiper
      .swiper-img
        display:block
        width:100%
          
</style>
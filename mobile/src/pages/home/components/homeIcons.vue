<template>
    <div class="Icons">
       <swiper :options="swiperOption">
          <div class="swiper-slide icons-slide" v-for="(page,index) of pages" :key="index">
              <div class="icons-slide" v-for="item of page" :key="item.id">
		          <img class="icons-img" :src="item.imgUrl">
		          <p class="icon-text">{{item.desc}}</p>
	          </div>
	      </div>
	   </swiper>
    </div>
</template>

<script>
    export default {
       name:'homeIcons',
       props:{
         list:Array
       },
       data () {
          return {
              swiperOption: {
	             autoplay:false
	          }
          }
       },
       computed:{
         pages () {
            const pages = [];
            if(this.list.length) {
               this.list.forEach((item,index) => {
                  let page = Math.floor(index / 8);
	              if(!pages[page]) {
	                 pages[page] = [];
	              }
                  pages[page].push(item)
               })
               return pages
            }
         }
      }
    }
</script>

<style lang="stylus" scoped>
  @import '../../../assets/style/varible.styl'
    .Icons >>> .swiper-slide
      display:flex
      display:-webkit-flex
      flex-wrap:wrap
      width:100%
      text-align:center
    .Icons >>> .swiper-slide
      .icons-slide 
        margin-top:.30rem
        width:25%
        font-size:12px;
        color:#333 
        .icons-img
          display:block
          margin:0 auto .10rem
          width:.90rem;
          height:.90rem
          overflow:hidden
    .Icons
      padding-bottom:.40rem      
</style>
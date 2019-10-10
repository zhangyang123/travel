<template>
   <div class="Weekend">
       <div class="title">周末去哪</div>
       <div class="weekend-list">
           <a class="weekend-links" href="javascript:void(0)" v-for="item of list" :key="item.id">
               <img class="weekend-img" :src="item.imgUrl">
               <div class="weekend-text">
                   {{item.title}}
                   <p>{{item.desc}}</p>
               </div>
           </a>
        </div>
   </div>
</template>

<script>
   export default {
       name:'homeWeekend',
       props:{
          list:Array
       },
       data () {
          return {
             
          }
       }
   }
</script>

<style lang="stylus" scoped>
  @import '../../../assets/style/varible.styl'
    .Weekend
      .title
        padding:0 .20rem
        width:100%
        height:.80rem
        font-size:14px
        color:#333
        line-height:.80rem
        box-sizing:border-box
        background:#f5f5f5
	  .weekend-list
	    width:100%
	    background:#fff
	    .weekend-links
	      display:block
	      text-decoration:none
	      width:100% 
	      .weekend-img
	         display:block
	         width:100% 
	         height:2.0rem
	         object-fit:cover 
	      .weekend-text
	        padding:.20rem
	        font-size:14px
	        color:#333
	        line-height:.40rem
	        ellipsis()
	        -webkit-line-clamp:2
	        p
	          font-size:12px 
	          color:#aaa
	          text-decoration:none 
</style>
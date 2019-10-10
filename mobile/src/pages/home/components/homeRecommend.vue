<template>
    <div class="Recommend">
       <div class="title">热销推荐</div>
       <ul class="list">
           <router-link 
              tag="li" 
              v-for="item of list" 
              :key="item.id" 
              :to="`details/${item.id}`">
              <div class="list-img">
                   <img :src="item.imgUrl">
              </div>
              <div class="list-text">
                   <h3>{{item.title}}</h3>
                   <p>{{item.desc}}</p>
                   <p>
                     <span class="price">{{item.price}}</span>起
                     <span class="links">详情</span>
                   </p>
              </div>
              <div class="border"></div>
           </router-link>
       </ul>
    </div>
</template>

<script>
    export default {
       name:'homeRecommend',
       props:{
          list:Array
       },
       data () {
          return {
            
          }
       }
    }
</script>

<style lang="stylus" scope>
   @import '../../../assets/style/varible.styl'
   .Recommend
     .title
       padding:0 .20rem
       width:100%
       height:.80rem
       font-size:14px
       color:#333
       line-height:.80rem
       box-sizing:border-box
       background:#f5f5f5
     .list 
       li
         position:relative
         display:flex
         display:-webkit-flex
         padding:.20rem
         background:#fff
         .list-img 
           width:1.40rem
           line-height:0
           align-self:center
           img
             width:1.40rem
             height:1.0rem 
         .list-text
           flex-grow:1
           padding-left:0.20rem
           min-width:0
           font-size:12px
           color:#999 
          h3
             margin-bottom:.05rem
             font-size:14px
             color:#333
             font-weight:blod
             ellipsis()
           p
             line-height:.40rem
             ellipsis() 
             .price 
               color:btnbg
               font-weight:bold
	         .links
	           float:right
	           width:1.0rem
	           font-size:12px
	           color:btnbg
	           text-align:center
	           text-decoration:none
         .border
           border_list()
  </style>
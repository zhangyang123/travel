<template>
   <div>
     <div class="search">
        <input class="input-search" type="text" placeholder="输入城市名或拼音" v-model="keyword"> 
     </div>
     <div class="search-content" ref="serach" v-show="keyword">
         <ul class="search-list">
             <li v-for="item of list" :key="item.id" @click="handleChangeCity(item.name)">
               {{item.name}}
               <div class="border"></div>
             </li>
         </ul>
         <div class="noResult" v-show="hasNoData">
             <img src="../../../assets/images/kulian.png">没有找到匹配数据~
         </div>
     </div>
   </div>
</template>

<script>
   import { mapMutations } from 'vuex'
   import BScroll from 'better-scroll'
   export default {
       props:{
           cities:Object
       },
       data () {
          return {
             keyword:"",
             list:[],
             timer:null
          }
       },
       computed:{
          hasNoData () {
             return !this.list.length
          }
       },
       methods:{
          handleChangeCity (city) {
              this.changeCity(city)
              this.$router.push("/");
          },
          ...mapMutations(['changeCity'])
       },
       watch:{
          keyword () {
             if (this.timer) {
                 clearTimeout(this.timer)
             }
             if(!this.keyword) {
                 this.list = [];
                 return 
             }
             this.timer = setTimeout( () => {
                const result = [];
                for (let i in this.cities) {
                   this.cities[i].forEach((value) => {
                       if(value.spell.includes(this.keyword) || value.name.includes(this.keyword)) {
                           result.push(value)
                       }
                   })
                }
                this.list = result ;
             },100)
             
          }
       },
       mounted () {
           this.scroll = new BScroll(this.$refs.serach,{click:true,tap:true})
       }
   }

</script>

<style lang="stylus" scoped>
   @import '../../../assets/style/varible.styl' 
   .search
     display:flex
     padding:0 .20rem .20rem .20rem
     background:bg
     .input-search
       flex:1
       height:.60rem
       font-size:12px
       color:#333
       text-align:center
       line-height:0
       outline:none
       border:0
       background:#fff
       border-radius(2px)
    .search-content
       position:absolute
       top:1.66rem
       right:0
       bottom:0
       left:0
       z-index:10
       width:100%
       overflow:hidden
       background:#fff 
       .search-list
         li
           position:relative
           padding:0 .20rem
           height:.60rem
           font-size:14px
           line-height:.60rem
           box-sizing:border-box
           .border
             border_list()
       .noResult
         position:absolute
         top:0
         right:0
         bottom:0
         left:0
         z-index:2
         display:flex
         flex-direction:column
         justify-content:center 
         width:100%
         height:100%
         font-size:14px
         color:#f1f1f1
         text-align:center
         img
           margin:0 auto .10rem
           width:.60rem
           height:.60rem
               

</style>
<template>
    <div class="list" ref="wraper">
       <div>
	       <div class="title">当前城市</div>
	       <div class="button-list">
	           <div class="button-wrap">
	               <div class="button">{{this.currentCity}}</div>
	           </div>
	       </div>
	       <div class="title">热门城市</div>
	       <div class="button-list">
	           <div class="button-wrap"
                 v-for="item of hotList" 
                 :key="item.id"
                  @click="handleChangeCity(item.name)"
              >
	               <div class="button">{{item.name}}</div>
	           </div>
	       </div>
	       <div v-for="(value,key) of cityList" :key="key" :ref="key">
		       <div class="title">{{key}}</div>
			     <ul class="letter-list">
			       <li v-for="item of value" :key="item.id" @click="handleChangeCity(item.name)">
			           {{item.name}}
			           <div class="border"></div>
			       </li>
			     </ul>
	       </div>
	   </div>
    </div>
</template>

<script>
    import {mapState,mapMutations} from 'vuex'
    import BScroll from 'better-scroll'
    import {Bus} from '../../../bus/bus.js'
    export default {
       data () {
          return {
             
          }
       },
       props:{
          hotList:Array,
          cityList:Object
       },
       methods:{
          handleChangeCity (city) {
              this.changeCity(city)
              this.$router.push("/");
          },
          ...mapMutations(['changeCity'])
       },
       computed:{
          ...mapState({
              currentCity:'city'
          })
       },
       mounted () {
           const wraper = this.$refs.wraper;

           const scroll = new BScroll(wraper,{click:true});
           Bus.$on("change",letter => {
           console.log(wraper);
               if(letter) {
                  let element = this.$refs[letter][0];
                  
                  scroll.scrollToElement(element);
               }
           })
       }
       
    }
</script>

<style lang="stylus" scoped>
   @import '../../../assets/style/varible.styl'
    .list
      position:absolute
      top:1.66rem
      right:0
      bottom:0
      left:0
      overflow:hidden
      .title
        padding:0 .20rem
        height:.60rem
        font-size:14px
        color:#333
        line-height:.60rem
        background-color:#f5f5f5
      .button-list  
        display:flex
        flex-wrap:wrap
        justify-content:space-between
        padding:.20rem .60rem 0 .20rem
        .button-wrap
          margin-bottom:.20rem
          padding:0 .05rem
          width:33.33%
          height:.50rem 
          box-sizing:border-box
        .button 
          font-size:14px
          text-align:center
          line-height:.50rem
          border:1px solid #eee
          background:#fff
          border-radius(2px)
      .letter-list
        li
          position:relative
          padding:0 .20rem
          height:.60rem
          font-size:14px
          line-height:.60rem
          background:#fff    
          .border
            border_list()
</style>
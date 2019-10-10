<template>
    <div class="header">
       <div class="header-back">   
           <span class="iconfont backicon">&#xe600;</span>
       </div>
       <div class="header-input">
           <span class="iconfont searchicon">&#xe62b;</span>
           输入城市/景点/游玩城市
       </div>
       <router-link to="/City">
           <div class="header-right">
              {{this.city}}
              <span class="iconfont">&#xe672;</span>
           </div>
       </router-link>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name:'homeHeader',
        
        data () {
            return {
              
            }
        },
        computed:{
           ...mapState(['city'])
        }
        
    }
</script>

<style lang="stylus" scoped>
   @import '../../../assets/style/varible.styl'
    .header 
      display:flex
      align-items:center
      width:100%;
      height:.86rem;
      background:bg
      .header-back
        float:left
        padding-left:.20rem
        width:.50rem
        height:100%
        color:#fff
        line-height:.43rem
        .backicon
          font-size:24px 
      .header-input 
        flex-grow:1
        padding-left:.10rem
        height:.56rem
        font-size:14px
        color:#ccc
        line-height:.50rem
        background:#fff
        border-radius(5px)
        .searchicon
          position:relative
          top:.05rem
          font-size:20px
      .header-right
        float:right
        padding-right:.20rem
        width:1.50rem
        height:100%
        font-size:12px
        line-height:.86rem
        color:#fff
        text-align:right


</style>
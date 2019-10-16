<template>
    <div class="header">
       <div class="header-back">   
           <span class="iconfont backicon">&#xe600;</span>
       </div>
       <div class="header-input" @click="handleClick">
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
        },
        methods:{
           handleClick () {
              this.$router.push('/City');
           }
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
        position:relative
        float:left
        padding-left:.20rem
        width:.50rem
        height:100%
        color:#fff
        line-height:.43rem
        .backicon
          position:absolute
          font-size:24px 
          top:50%
          transform:translateY(-50%)
          -webkit-translateY(-50%)
          -moz-translateY(-50%)
      .header-input 
        flex:1
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
        padding-left:.10rem
        height:100%
        font-size:12px
        line-height:.86rem
        color:#fff
        text-align:right


</style>
<template>
    <div class="cityHeader">
        城市选择
        <router-link to="/">
            <span class="iconfont backicon">&#xe600;</span>
        </router-link>
    </div>
</template>

<script>
    export default {
        data () {
           return {

           }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '../../../assets/style/varible.styl' 
    .cityHeader
      position:relative
      width:100%
      height:.86rem
      font-size:16px
      color:#fff
      text-align:center
      line-height:.86rem
      background:bg
      .backicon
        position:absolute
        left:.20rem
        top:0
        font-size:20px
        color:#fff

</style>
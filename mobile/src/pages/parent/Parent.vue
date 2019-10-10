<template>
   <div>
       {{ this.getStateNum }}
       <son :fromParentNum="getStateNum" @change="changeStateNum"></son>
   </div>
</template>
<script>
   import son from './Son'
   import { mapState } from 'vuex'
   export default {
       name:'Parent',
       data () {
           return {
              
           }
       },
       components:{
          son
       },
       computed:{
           ...mapState({
               getStateNum:'num'
           })
       },
       methods:{
          changeStateNum (num) {
              
              this.$store.dispatch('changeNum',num)
          }
       },
       
   }
</script>

<style lang="stylus" scoped>

</style>
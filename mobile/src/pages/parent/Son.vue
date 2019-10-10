<template>
    <div>
       
       <button type="button" @click="handleChangeNum">点我</button>
    </div>
</template>

<script>
   export default {
      name:'Son',
      props:{
         fromParentNum:Number
      },
      data () {
         return {
            
         }
      },
      
      methods:{
         handleChangeNum () {
             this.$emit("change",(this.fromParentNum)*2)
         }
      },
      mounted () {
         
      }
   }
</script>
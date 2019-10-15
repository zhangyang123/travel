<template>
    <ul class="list">
       <li v-for="(value,key) in alpList" :key="key" :ref="key" @touchstart.prevent="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd" @click="handleLetterClick">
          {{key}}
       </li>
    </ul>
</template>

<script>
    import {Bus} from '../../../bus/bus.js'
    export default {
       data () {
           return {
              isTouch:false,
              startY:0
           } 
       },
       props:{
          alpList:Object
       },
       computed:{
          letters () {
              var letter = [];
              for(let i in this.alpList) {
                  letter.push(i);
              }
              return letter;
          }
       },

       methods:{
          handleLetterClick (e) {
              console.log(1212);
              let inner_html = e.target.innerHTML.replace(/\s/g,"");
              Bus.$emit("change",inner_html)
          },
          handleTouchStart () {
              this.isTouch = true;
          },
          handleTouchMove (e) {
              if(this.isTouch) {
                 if(this.timer) {
                    clearTimeout(this.timer);
                 }
                 let startY = this.startY
                 let clientY = e.touches[0].clientY - 85;
                 let index = Math.floor((clientY-startY)/20);
                 if( index >= 0 && index < this.letters.length ) {
                    Bus.$emit("change",this.letters[index])
                 }
              }
          },
          handleTouchEnd () {
             this.isTouch = false;
          }

       },
       updated () {
           this.startY = this.$refs['A'][0].offsetTop;
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
      z-index:999
      display:flex
      flex-direction:column
      justify-content:center
      width:.60rem
      font-size:14px
      color:bg
      line-height:.36rem
      text-align:center

</style>
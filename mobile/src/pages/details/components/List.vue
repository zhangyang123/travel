<template>
    <div>
       <div class="list">
           <div class="list-title">
              <img src="../../../assets/images/cuxiao.png">
              促销票
              <div class="border"></div>
           </div>
           <ul class="discount-list">
              <li>
                 北京欢乐谷夜场成人票1张（适用于1名成人或1名身高1.1米以上的儿童）
                 <div class="border"></div>
              </li>
              <li>
                 北京欢乐谷夜场成人票1张（适用于1名成人或1名身高1.1米以上的儿童）
                 <div class="border"></div>
              </li>
              
           </ul>
           <div class="list-title">
              <img src="../../../assets/images/cuxiao.png">
              打折票
              <div class="border"></div>
           </div>
           <ul class="discount-list">
              <li>
                 北京欢乐谷夜场成人票1张（适用于1名成人或1名身高1.1米以上的儿童）
                 <div class="border"></div>
              </li>
              <li>
                 北京欢乐谷夜场成人票1张（适用于1名成人或1名身高1.1米以上的儿童）
                 <div class="border"></div>
              </li>
              
           </ul>
           <div class="list-title">
              <img src="../../../assets/images/cuxiao.png">
              换券票
              <div class="border"></div>
           </div>
           <ul class="discount-list">
              <li>
                 北京欢乐谷夜场成人票1张（适用于1名成人或1名身高1.1米以上的儿童）
                 <div class="border"></div>
              </li>
              <li>
                 北京欢乐谷夜场成人票1张（适用于1名成人或1名身高1.1米以上的儿童）
                 <div class="border"></div>
              </li>
              
           </ul>
           <div class="list-title">
              <img src="../../../assets/images/cuxiao.png">
              满减票
              <div class="border"></div>
           </div>
           <ul class="discount-list">
              <li>
                 北京欢乐谷夜场成人票1张（适用于1名成人或1名身高1.1米以上的儿童）
                 <div class="border"></div>
              </li>
              <li>
                 北京欢乐谷夜场成人票1张（适用于1名成人或1名身高1.1米以上的儿童）
                 <div class="border"></div>
              </li>
              
           </ul>
           <div class="list-title">
              <img src="../../../assets/images/cuxiao.png">
              购物票
              <div class="border"></div>
           </div>
           <ul class="discount-list">
              <li>
                 北京欢乐谷夜场成人票1张（适用于1名成人或1名身高1.1米以上的儿童）
                 <div class="border"></div>
              </li>
              <li>
                 北京欢乐谷夜场成人票1张（适用于1名成人或1名身高1.1米以上的儿童）
                 <div class="border"></div>
              </li>
              
           </ul>

       </div>
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
<style lang="stylus" scope>
   @import '../../../assets/style/varible.styl'
    .list
      .list-title
        position:relative
        padding:0 .20rem
        width:100% 
        height:.80rem
        font-size:14px;
        font-weight:bold
        color:#333
        line-height:.80rem
        box-sizing:border-box
        img
          width:24px
          height:24px
          vertical-align:middle
        .border
          border_list()
       .discount-list
         li
          position:relative
          padding:.20rem .60rem
          font-size:12px 
          color:#666 
          box-sizing:border-box 
          ellipsis()
          & .border
           border_list() 
</style>
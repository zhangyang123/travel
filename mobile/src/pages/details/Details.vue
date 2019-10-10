<template>
   <div>
      <details-header></details-header>
      <details-banner></details-banner>
      <details-list></details-list>
   </div>
</template>

<script>
    import detailsBanner from './components/Banner'
    import detailsHeader from './components/Header'
    import detailsList from './components/List'
    export default {
        data () {
           return {

           }
        },
        components:{
           detailsBanner,
           detailsHeader,
           detailsList
        }
    }
</script>

<style lang="stylus" scoped>

</style>
<template>
   <div>
      <city-header></city-header>
      <city-search :cities="cities"></city-search>
      <city-list :hotList="hotCities" :cityList="cities"></city-list>
      <city-alphate :alpList="cities"></city-alphate>
   </div>
</template>

<script>
    import cityHeader from './components/headerCity'
    import citySearch from './components/searchCity'
    import cityList from './components/listCity'
    import cityAlphate from './components/Alphate'
    import axios from 'axios'
    export default {
       data () {
          return {
             hotCities:[],
             cities:{}
          }
       },
       components:{
          cityHeader,
          citySearch,
          cityList,
          cityAlphate
       },
       methods:{
          getCityInfo () {
             axios.get("/api/city.json")
               .then(this.handleGetCitySuccInfo)
          },
          handleGetCitySuccInfo (res) {
             res = res.data
             if(res.ret && res.data) {
                 this.hotCities = res.data.hotCities;
                 this.cities = res.data.cities;
             }
          }

       },
       mounted () {
            this.getCityInfo()
       }
    }
</script>

<style lang="stylus">
    
</style>
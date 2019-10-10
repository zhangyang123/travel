export default {
   changeCity (state,city) {
      state.city = city
      try {
          localStorage.city = city
      }catch (e) {}
            
	},
	changeNum (state,num) {
		state.num = num

	}
}
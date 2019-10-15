module.exports = {
	devServer:{
		port:8080,
		proxy:{
			/*"/api":{*/
			"/travel/mobile/dist":{
				//target:"http://localhost:8080",
				target:"https://zhangyang123.github.io"
				pathRewrite:{
					"^/api" : "/mock/"
					//"^/api":"/travel/mobile/dist/mock/"
				}
			}
		}
	},
	publicPath:'./'


}
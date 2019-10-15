
module.exports = {
	assetsDir: './',
	devServer:{
		port:8080,
		proxy:{
			"/api":{
				target:"http://localhost:8080",
				pathRewrite:{
					"^/api" : "/mock/"
				}
			}
		}
	}

}
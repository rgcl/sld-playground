var miniExcludes = {
		"app/index.html": 1,
		"app/preview.html": 1,
		"app/README.md": 1,
		"app/package": 1
	},
	isTestRe = /\/test\//;

var profile = {
	resourceTags: {
		test: function(filename, mid) {
			return isTestRe.test(filename);
		},

		miniExclude: function(filename, mid){
			return isTestRe.test(filename) || mid in miniExcludes;
		},
		
		copyOnly : function(filename, mid) {
			return /^app\/resources/.test(mid);
		},

		amd: function(filename, mid) {
			return /\.js$/.test(filename) && !/^app\/resources/.test(mid);
		}
	}
};
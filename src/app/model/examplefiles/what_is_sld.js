define(function() {
	return {
		"name" : "what_is_sld.json",
		"editor" : {
			"theme" : "ace/theme/github",
			"mode" : "ace/mode/json"
		},
		"render" : {
			"device" : "desktop",
			"theme" : "claro"
		},
		"sld" : {
			"$type" : "sld/html/Element",
			"tagName" : "section",
			"$children" : [{
				"$type" : "sld/html/Element",
				"tagName" : "h1",
				"innerHTML" : "Simple Layout Definition Demo"
			}, {
				"$type" : "sld/html/Element",
				"tagName" : "p",
				"innerHTML" : "A demonstration of the technological capabilities of SLD"
			}, {
				"$type" : "sld/html/Element",
				"tagName" : "p",
				"$children" : [{
					"$type" : "sld/html/Element",
					"tagName" : "span",
					"innerHTML" : "See more in "
				}, {
					"$type" : "sld/html/Element",
					"tagName" : "a",
					"target" : "_blank",
					"href" : "https://github.com/sapienlab/sld",
					"innerHTML" : "Github"
				}]
			}, {
				"$type" : "sld/html/Element",
				"tagName" : "small",
				"innerHTML" : "(note: SLD is for layouts, not for write HTML xD)"
			}]
		}
	}
}); 
define(function() {
	return {
		"name" : "mobile.json",
		"editor" : {
			"theme" : "ace/theme/github",
			"mode" : "ace/mode/json"
		},
		"render" : {
			"device" : "mobile",
			"theme" : "Android"
		},
		"sld" : {		
			"$type" : "dojox/mobile/View",
			"$children" : [{
				"id" : "home",
				"$type" : "dojox/mobile/View",
				"$children" : [{
					"$type" : "dojox/mobile/Heading",
					"label" : "Home"
				}, {
					"$type" : "dojox/mobile/RoundRectList",
					"$children" : [{
						"$type" : "dojox/mobile/ListItem",
						"label" : "To view 1",
						"icon" : "http://dojofoundation.org/images/icons/6.png",
						"moveTo" : "view1",
						"transition" : "slide"
					}, {
						"label" : "To view 2",
						"icon" : "http://dojofoundation.org/images/icons/6.png",
						"$type" : "dojox/mobile/ListItem",
						"moveTo" : "view2",
						"transition" : "slide"
					}]
				}]
			}, {
				"$type" : "dojox/mobile/ScrollableView",
				"$children" : [{
					"$type" : "dojox/mobile/Heading",
					"label" : "My App",
					"back" : "Home",
					"moveTo" : "home",
					"fixed" : "top"
				}, {
					"id" : "view1",
					"$type" : "dojox/mobile/View",
					"$children" : [{
						"$type" : "dojox/mobile/RoundRectList",
						"$children" : [{
							"$type" : "dojox/mobile/RoundRectCategory",
							"label" : "Buttons"
						}, {
							"$type" : "dojox/mobile/ContentPane",
							"$children" : [{
								"$type" : "dojox/mobile/Button",
								"label" : "Tangaranica!"
							}, {
								"$type" : "dojox/mobile/Button",
								"label" : "Tangaraná!"
							}, {
								"$type" : "dojox/mobile/Switch",
								"leftLabel" : "Tangaranica",
								"rightLabel" : "Tangaraná"
							}]
						}]
					}]
				}, {
					"id" : "view2",
					"$type" : "dojox/mobile/View",
					"$children" : [{
						"$type" : "dojox/mobile/Video",
						"controls" : true,
						"source" : [{
							"src" : "http://www.w3schools.com/html/movie.mp4",
							"type" : "video/mp4"
						}, {
							"src" : "http://www.w3schools.com/html/movie.ogg",
							"type" : "video/ogg"
						}]
					}]
				}]
			}]
		}
	}
}); 
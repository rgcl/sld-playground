define(function() {
	return {
		"name" : "desktop.json",
		"editor" : {
			"theme" : "ace/theme/github",
			"mode" : "ace/mode/json"
		},
		"render" : {
			"device" : "desktop",
			"theme" : "claro"
		},
		"sld" : {			
			"$type" : "dijit/layout/BorderContainer",
			"liveSplitters" : true,
			"$children" : [{
				"$type" : "dijit/Toolbar",
				"region" : "top",
				"$children" : [{
					"$type" : "dijit/form/DropDownButton",
					"label" : "File",
					"dropDown" : {
						"$type" : "dijit/DropDownMenu",
						"$children" : [{
							"$type" : "dijit/MenuItem",
							"label" : "New"
						}, {
							"$type" : "dijit/MenuItem",
							"label" : "Save"
						}, {
							"$type" : "dijit/MenuItem",
							"label" : "Save As..."
						}]
					}
				}, {
					"$type" : "dijit/form/DropDownButton",
					"label" : "Edit",
					"dropDown" : {
						"$type" : "dijit/DropDownMenu",
						"$children" : [{
							"$type" : "dijit/MenuItem",
							"label" : "Cut"
						}, {
							"$type" : "dijit/MenuItem",
							"label" : "Copy"
						}, {
							"$type" : "dijit/MenuItem",
							"label" : "Paste"
						}]
					}
				}, {
					"$type" : "dijit/form/Button",
					"label" : "A Button"
				}]
			}, {
				"$type" : "dijit/layout/AccordionContainer",
				"region" : "leading",
				"splitter" : true,
				"style" : {
					"width" : "150px"
				},
				"$children" : [{
					"$type" : "dijit/layout/ContentPane",
					"title" : "This is as well",
					"content" : "Hi how are you?"
				}, {
					"$type" : "dijit/layout/ContentPane",
					"title" : "This too",
					"content" : "Hello im fine.. thnx"
				}]
			}, {
				"id" : "tab",
				"splitter" : true,
				"$type" : "dijit/layout/TabContainer",
				"region" : "center",
				"$children" : [{
					"$type" : "dijit/layout/ContentPane",
					"title" : "Pane1",
					"$children" : [{
						"$type" : "dijit/form/Button",
						"label" : "label1"
					}, {
						"$type" : "dijit/form/Button",
						"label" : "label2"
					}]
				}, {
					"$type" : "dijit/layout/ContentPane",
					"title" : "Pane2",
					"content" : "Test"
				}]
			}]
		}
	}
});
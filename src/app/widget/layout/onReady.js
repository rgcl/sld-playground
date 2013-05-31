define(['dojo/dom', // dom
'dojo/_base/fx', // fx
'dojo/dom-style', // domStyle
'sld/parser', // parser
'dojo/text!./sld.json', // sld
'./rules', // rules
'dojo/domReady!'], function(dom, fx, domStyle, parser, sld, rules) {
	return {
		load : function(id, require, callback) {			
			parser.parse(sld, rules).then(function(layout) {
				layout.placeAt(document.body);
				layout.startup();
				// fade out the "loading..." layer
				fx.fadeOut({
					node : dom.byId('loadingOverlay'),
					onEnd : function(node) {
						domStyle.set(node, 'display', 'none');
					}
				}).play();
				callback();
			});
		}
	}
});

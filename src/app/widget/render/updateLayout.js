define(['sld/parser', 'dojo/json', 'dojo/dom-construct', 'require'], function(parser, json, domConstruct, require) {

	var updating = false, root;

	return function(sld, targetDomNode, errback) {

		if (updating)
			return;

		updating = true;

		root && root.destroyRecursive && root.destroyRecursive();
		domConstruct.empty(document.body);

		parser.parse(sld, {
			require : require
		}).then(function(layout) {

			root = layout;

			layout.placeAt(targetDomNode);
			layout.startup();

			updating = false;

		}, errback);
	}
});

define(['jsonpack', // jsonpack
'dijit/registry', // registry
'../model/preferences!', // preferences
'../model/files!' // files
], function(jsonpack, registry, preferences, files) {

	return {

		summary : 'Import a file',

		exec : function(script, packedFile) {

			var file = jsonpack.unpack(decodeURI(packedFile));

			var filename = file.name, i = 1;
			while (files.has(filename)) {
				filename = file.name + i;
			}
			file.name = filename;

			var pane = registry.byId('editorContainer').createPane(file, true);
			pane.set('title', '*' + pane.get('title'));

		}
	}

});

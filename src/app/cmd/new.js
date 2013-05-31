define([
'dijit/registry', // registry
'../model/preferences!', // preferences
'../model/files!' // files
], function(registry, preferences, files) {

	return {
		
		summary : 'Creates a new SLD',
		
		exec : function(script, name) {

			var editorPreferences = preferences.get('editor');
			var editorContainer = registry.byId('editorContainer');

			if (!name && !( name = prompt('Insert filename:')))
				return;

			if (files.has(name)) {
				editorContainer.selectChild(registry.byId('pane-' + name));
				return;
			}

			// Create the file
			var file = {
				name : name.replace(/ /g, '_'),
				editor : {
					theme : 'ace/theme/github',
					mode : 'ace/mode/json'
				},
				render : {
					device : 'desktop',
					theme : 'claro'
				},
				sld : {
					$type : 'dijit/form/Button',
					label : 'OMG IT WORKS!'
				}
			};

			// store the file
			files.set(name, file);
			
			return editorContainer.createPane(file, true);					

		}
	}

});

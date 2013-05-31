define(['../widget/editor/Pane', // EditorPane
'dijit/registry', // registry
'dojo/json', // JSON
'../model/preferences!', // preferences
'../model/files!' // files
], function(EditorPane, registry, JSON, preferences, files) {

	return {

		summary : 'Render the given SLD, if given is null, then render the current',

		exec : function(script, sldName) {

			var editorContainer = registry.byId('editorContainer');

			var pane = sldName ? registry.byId('pane-' + sldName) : editorContainer.get('selectedChildWidget');

			if (!pane) {
				console.error('Undefined pane');
				return;
			}

			var renderPane = registry.byId('renderPane'); 
			renderPane.file = pane.get('file');
			renderPane.reload();
						
		}
	}

});

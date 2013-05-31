define(['../widget/editor/Pane', // EditorPane
'dijit/registry', // registry
'../model/preferences!', // preferences
'../model/files!' // files
], function(EditorPane, registry, preferences, files) {

	return {

		summary : 'Saves the given SLD, if given is null, then saves the current',

		exec : function(script, name) {

			var editorPreferences = preferences.get('editor');
			var editorContainer = registry.byId('editorContainer');

			var pane = name ? registry.byId('pane-' + name) :editorContainer.get('selectedChildWidget');
			
			if(!pane) {
				console.error('Undefined pane');
				return;
			}
			
			try{
				pane.save();
			} catch(e) {
				alert(e.message);
				console.error(e);
			}

		}
	}

});

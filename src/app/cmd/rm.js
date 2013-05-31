define(['../widget/editor/Pane', // EditorPane
'dijit/registry', // registry
'../model/preferences!', // preferences
'../model/files!' // files
], function(EditorPane, registry, preferences, files) {

	return {
		summary : 'remove the SLD from the local database',
		exec : function(script, sldName) {

			var editorPreferences = preferences.get('editor');
			var editorContainer = registry.byId('editorContainer');
			var pane;
			if (!sldName) {
				pane = editorContainer.get('selectedChildWidget');
				if (!(pane && ( sldName = pane.get('name'))) && !( sldName = prompt('Insert filename:')))
					return;
			}

			if (!confirm('Are you sure you want to delete "' + sldName + '"?')) {
				return;
			}

			if (!pane)
				pane = registry.byId('pane-' + sldName);
			pane.getParent().removeChild(pane);
			pane.destroyRecursive();
			files.remove(sldName);

		}
	}

});

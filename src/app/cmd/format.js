define(['dijit/registry'], function(registry) {

	return {
		summary : 'Apply format',
		exec : function(script, sldName) {
			
			var editorContainer = registry.byId('editorContainer');			
			var pane;
			
			if (!sldName) {
				pane = editorContainer.get('selectedChildWidget');
				if (!(pane && ( sldName = pane.get('name'))) && !( sldName = prompt('Insert filename:')))
					return;
			}

			pane.format();

		}
	}

});

define(['../widget/editor/Pane', // EditorPane
'dijit/registry', // registry
'../cmd' // cmd
], function(EditorPane, registry, cmd) {

	return {

		summary : 'Saves the given SLD, if given is null, then saves the current',

		exec : function(script, who, theme, name) {
			
			var editorContainer = registry.byId('editorContainer');
			var renderButton = registry.byId('renderThemeSetterButton')
			var editorPane = name ? registry.byId('pane-' + name) : editorContainer.get('selectedChildWidget');
				if (!editorPane) {
					console.error('Undefined editorPane');
					return;
			}

			if (who == 'editor') {
								
				editorPane.set('theme', theme);
				
			} else if (who == 'render') {
				
				var themeParts = theme.split('-');																				
				
				var file = editorPane.get('file');
				file.render.device = themeParts[0];
				file.render.theme = themeParts[1];
				
				editorPane.set('file', file);				
				
				cmd('render ' + file.name).then(function() {
					renderButton.set('file', file);
				});								
								
			}

		}
	}

});

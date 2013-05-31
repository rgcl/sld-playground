define(['../widget/editor/Pane', // EditorPane
'dijit/registry', // registry
'dojo/dom', // dom
'jsonpack' // jsonpack
], function(EditorPane, registry, dom, jsonpack) {

	return {

		summary : 'Share the current (or given) SLD',

		exec : function(script, name) {

			var editorContainer = registry.byId('editorContainer');

			var pane = name ? registry.byId('pane-' + name) : editorContainer.get('selectedChildWidget');

			if (!pane) {
				console.error('Undefined pane');
				return;
			}

			var input = dom.byId('shareInput');
			try {
				var packed = jsonpack.pack(pane.get('file'));
				var url = location.href + '?sld=' + encodeURI(packed);				
				input.value = url;
				input.select();
			} catch(e) {
				alert('Error in the SLD');
				input.value = '';
			}
		}
	}

});

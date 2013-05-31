require(['dojo/_base/config', // locale
'dojo/_base/array', // array,
'dojo/json', // JSON
'dijit/registry', // registry
'jsonpack', // jsonpack
'app/cmd', // cmd
'app/model/files!', // files
'app/model/preferences!', // preferences,
'app/widget/layout/onReady!'], function(config, array, JSON, registry, jsonpack, cmd, files, preferences) {

	var editorContainer = registry.byId('editorContainer');
	var renderPane = registry.byId('renderPane');
	var renderButton = registry.byId('renderThemeSetterButton');	
	var automaticRenderChecked = registry.byId('automaticRenderCheckedMenuItem');
	var editorPreferences = preferences.get('editor');

	automaticRenderChecked.set('checked', preferences.get('general').automaticRender);

	editorContainer.watch('selectedChildWidget', function(name, oldPane, newPane) {
		try {
			var file = newPane.get('file');
			renderPane.set('file', file);
			renderButton.set('file', file);
			editorPreferences.selectedFilename = file.name;
			preferences.set('editor', editorPreferences);
		} catch(e) {
		}
	});

	var file = files.get(editorPreferences.selectedFilename);
	if (file) {
		var selectedPane = editorContainer.get('selectedChildWidget');
		if (selectedPane.get('file').name != file.name) {
			try {
				editorContainer.selectChild('pane-' + file.name);
			} catch(e) {
			}
		} else {
			renderButton.set('file', file);
			try {
				renderPane.set('file', file);
			} catch(e) {
			}
		}
	}

	if (localStorage && localStorage.sld) {
		cmd('import ' + localStorage.sld).then(function(pane) {			
			localStorage.removeItem('sld');
		}, function(e) {
			alert('Oops! Error in the packed file :`(');
			localStorage.removeItem('sld');
		});
	}

});

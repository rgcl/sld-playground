define(['lightDb'], function(lightDb) {

	var preferences = lightDb.get('preferences');

	if (!preferences.has('editor'))
		preferences.set('editor', {
			theme : 'ace/theme/github',
			mode : 'ace/mode/json',
			value : '{\n\t"$type" : "dijit/form/Button",\n\t"label" : ":)"\n}',
			selectedFilename: 'desktop.json'
		});

	if (!preferences.has('general'))
		preferences.set('general', {
			locale : 'auto',
			automaticRender : true
		});

	return {
		load : function(id, require, callback) {
			callback(preferences);
		}
	}

});

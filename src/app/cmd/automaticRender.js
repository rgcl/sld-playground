define(['../widget/editor/Pane', // EditorPane
'dijit/registry', // registry
'dojo/json', // JSON
'../model/preferences!' // preferences
], function(EditorPane, registry, JSON, preferences, files) {

	var renderChecked = registry.byId('automaticRenderCheckedMenuItem');

	return {

		summary : 'Set the automaticRender variable',

		exec : function(script, value) {

			if (!value)
				value = renderChecked.get('checked');
			else {
				value = value.toLowerCase();
				value = value == 'on' || value == 'ok' || value == '1' || value == 'true' || value == 'yes';
			}
			
			var generalSettings = preferences.get('general');
			generalSettings.automaticRender = value;
			preferences.set('general', generalSettings);

			renderChecked.set('checked', value);

		}
	}

});

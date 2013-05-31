define(['dojo/_base/declare', // declare
'dojo/when', // when
'dojo/json', // JSON
'dojo/dom-class', // domClass
'dijit/layout/TabContainer', // TabContainer
'dijit/registry', // registry
'app/widget/editor/Pane', // EditorPane
'app/model/files!', // files
'app/model/preferences!', // preferences
'app/widget/editor/js-beautify' // jsBeautify
], function(declare, when, JSON, domClass, TabContainer, registry, EditorPane, files, preferences, jsBeautify) {

	var renderPane = registry.byId('renderPane');
	var renderButton = registry.byId('renderButton');

	return declare(TabContainer, {

		postCreate : function() {

			var me = this;
			me.inherited(arguments);

			var editorPreferences = preferences.get('editor');

			files.forEach(function(file) {
				me.createPane(file);
			});

		},

		createPane : function(file, select) {
			var me = this;
			var pane = new EditorPane(file);
			pane.set('title', file.name);
			pane.aceSession.on('change', function(e) {
				if (preferences.get('general').automaticRender) {
					try {
						renderPane.set('file', pane.get('file'));
					} catch(e) {
					} finally {
						pane._change();
					}
				}
			});
			me.addChild(pane);
			select && me.selectChild(pane);
			return pane;
		}
	});

});

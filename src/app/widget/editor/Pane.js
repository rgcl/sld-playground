define(['dojo/_base/declare', // declare
'dijit/layout/ContentPane', // ContentPane
'dojo/dom-construct', // domConstruct
'dijit/registry', // registry
'dojo/string', // string
'dojo/json', // JSON
'dojo/_base/lang', '../../cmd', 'app/widget/editor/js-beautify', // jsBeautify
'../../model/files!', // files
'../../model/preferences!' // preferences
], function(declare, ContentPane, domConstruct, registry, string, JSON, lang, cmd, jsBeautify, files, preferences) {

	var editorPreferences = preferences.get('editor');

	return declare(ContentPane, {

		constructor : function(file) {

			var me = this;

			me.file = file;
			me.title = me.file.name;
			me.closable = me.file.editor.closable || true;
			me.id = 'pane-' + me.file.name;

			me.aceEditorDomNode = domConstruct.create('div', {
				style : 'width: 100%; height: 100%; margin: 0; padding: 0'
			});

			me.aceEditor = ace.edit(me.aceEditorDomNode);
			me.aceSession = me.aceEditor.getSession();

			me.aceEditor.setShowPrintMargin(false);
			me.aceEditor.setValue(jsBeautify(JSON.stringify(me.file.sld)));
			me.aceEditor.setTheme(me.file.editor.theme);
			me.aceSession.setMode(me.file.editor.mode);

		},

		postCreate : function() {
			var me = this;
			me.inherited(arguments);
			domConstruct.place(me.aceEditorDomNode, me.domNode);
		},

		onClose : function() {
			cmd('rm ' + this.get('name'));
			return false;
		},

		save : function() {
			var me = this;
			if (me.saved)
				return;
			me.file.updateAt = Date.now ? Date.now() : new Date().getTime();
			me.file.sld = JSON.parse(me.aceEditor.getValue(), true);
			files.set(me.file.name, me.file);
			me.set('title', me.file.name);
			me.saved = true;
		},

		format : function() {
			var value = this.aceEditor.getValue();
			try {
				var newValue = jsBeautify(value);
				if (value != newValue) {
					this.aceEditor.setValue(newValue);
					this._change();
				}
			} catch(e) {
				this.aceEditor.setValue(value);
			}
		},

		resize : function() {
			this.inherited(arguments);
			this.aceEditor.resize();
		},

		_getFileAttr : function() {
			this.file.sld = JSON.parse(this.aceEditor.getValue(), true);
			return this.file;
		},
		_setFileAttr : function(file) {
			this.file = file;
			var newValue = jsBeautify(JSON.stringify(this.file.sld));
			if (jsBeautify(this.aceEditor.getValue()) !== newValue)
				this.aceEditor.setValue(newValue);
			this._change();
		},

		_getNameAttr : function() {
			return this.file.name;
		},
		_setNameAttr : function(name) {
			this.file.name = name;
			this._change();
		},

		_getSldAttr : function() {
			return JSON.parse(this.aceEditor.getValue());
		},
		_setSldAttr : function(sld) {
			this.file.sld = sld;
			this.aceEditor.setValue(jsBeautify(JSON.stringify(sld)));
			this._change();
		},

		_getValueAttr : function() {
			return this.aceEditor.getValue();
		},
		_setValueAttr : function(value) {
			this.file.sld = JSON.parse(value, true);
			this.aceEditor.setValue(value);
			this._change();
		},

		_getThemeAttr : function() {
			return this.file.editor.theme;
		},
		_setThemeAttr : function(theme) {
			this.file.editor.theme = theme;
			this.aceEditor.setTheme(theme);
			this._change();
		},

		_getModeAttr : function() {
			return this.file.editor.mode;
		},
		_setModeAttr : function(mode) {
			this.file.editor.mode = mode;
			this.aceSession.setMode(mode);
			this._change();
		},

		_change : function() {
			this.set('title', '*' + this.file.name);
			this.saved = false;
		}
	});

});

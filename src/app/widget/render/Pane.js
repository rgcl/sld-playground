define(['dojo/_base/declare', // declare
'dijit/layout/ContentPane', // ContentPane
'dojo/dom-construct', // domConstruct
'../../model/files!'], function(declare, ContentPane, domConstruct) {

	return declare(ContentPane, {
		
		iframeLoaded : false,

		postCreate : function() {
			var me = this;

			me.inherited(arguments);

			me.iframe = domConstruct.create('iframe', {
				style : 'width: 100%; height: 100%; margin: 0; padding: 0;border:0',
				src : 'about:blank',
				onload : function() {										
					me.iframeLoaded = true;										
					if (me.file && this.src == 'about:blank') {
						me.reload();
					}
				}
			}, me.domNode);
		},

		reload : function() {
			this.iframeLoaded = false;
			this.iframe.src = this.get('url');
		},

		showError : function(e) {
			this.iframeLoaded && this.iframe.contentWindow.showError(e);
		},

		_setFileAttr : function(file) {
			var oldFile = this.file;
			this.file = file;
			if ((oldFile && oldFile.render.theme != file.render.theme)
				|| (!this.iframe || !this.iframe.contentWindow.iframeLoad)) {
				this.reload();
			} else {				
				this.iframe.contentWindow.iframeLoad(this.file);
			}
		},

		_getUrlAttr : function() {
			return require.toUrl('app/widget/render/' + this.get('device') + '.html?theme=' + this.get('theme'))
		},

		_getDeviceAttr : function() {
			if (!this.file)
				return 'desktop';
			return this.file.render.device;
		},

		_getThemeAttr : function() {
			if (!this.file)
				return 'claro';
			return this.file.render.theme;
		}
	});

});

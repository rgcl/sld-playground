define(['dojo/_base/declare'], function(declare) {

	return declare(null, {
	
		_setFileAttr : function(file) {
			this.file = file;
			this.set('iconClass', 'dijitIcon appIcon ' + this.file.render.device + 'App');
			var theme = this.file.render.theme;
			theme = theme.charAt(0).toUpperCase() + theme.slice(1);			
			this.set('label', theme);
		},
		
		_getFileAttr : function(file) {
			return file;
		}
		
	});

});

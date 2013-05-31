define(['../cmd', 'dojo/cookie', 'dijit/registry'], function(cmd, cookie, registry) {

	return {
		summary : 'Apply format',
		exec : function(script, locale) {
			
			registry.byId('localeButton').set('label', locale);
			
			cookie('locale', locale);
			
			cmd('reboot');
			
		}
	}

});

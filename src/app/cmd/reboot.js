define(['../cmd', 'dojo/cookie', 'dojo/i18n!../nls/app'], function(cmd, cookie, i18n) {

	var rebooting = false;

	return {
		summary : 'Reboot the app',
		exec : function(script) {
			
			if(rebooting) return;
			console.log(i18n);
			if (confirm(i18n.ARE_YOU_SURE_TO_REBOOT)) {
				rebooting = true;
				window.location.href = window.location.href;
			}

		}
	}

});

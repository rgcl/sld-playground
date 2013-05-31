define(['dojo/_base/config', '../../cmd', // cmd
'dojo/i18n!../../nls/app' // i18n
], function(config, cmd, i18n) {

	var isRtl = document.body.dir === 'rtl';

	return {
		rules : [{
			keyPattern : /^label|title$/,

			onPreparse : function(key, value) {
				this.value = i18n[value] || value;
			}
		}, {
			keyPattern : 'cmd',
			onPreparse : function(key, value) {
				this.key = 'onClick';

				this.value = function() {
					cmd(value);
				};

			}
		}, {
			keyPattern : 'ruleDirTrailing',
			onPreparse : function() {
				this.key = 'style';
				this.value = 'float:' + ( isRtl ? 'left' : 'right') + ';';
			}
		}, {
			keyPattern : 'ruleLocaleButtonLabel',
			onPreparse : function() {
				this.key = 'label';
				this.value = config.locale.split('-')[0];
			}
		}]
	}

});

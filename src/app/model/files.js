define(['lightDb', 'dojo/Deferred'], function(lightDb, Deferred) {

	var files = lightDb.get('files');

	return {

		load : function(id, require, callback) {

			if (!!files.size()) {
				callback(files);
				return;
			}

			require(['app/model/examplefiles/what_is_sld', 'app/model/examplefiles/mobile', 'app/model/examplefiles/desktop'], function() {
				for (var i in arguments) {
					var file = arguments[i];
					files.set(file.name, file);
				}
				callback(files);
			});
		}
	}

});

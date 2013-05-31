define(['require', 'dojo/when', 'dojo/Deferred'], function(require, when, Deferred) {
	return function(command) {
		console.log('$ let "$pid ' + command + '"');
		var args = command.split(' ');
		var deferred = new Deferred();		
		require(['./cmd/' + args[0]], function(cmd) {
			when(cmd.exec.apply(null, args), function(result) {
				deferred.resolve(result);
			}, function(e) {
				deferred.reject(e);
			});
		});
		return deferred.promise;
	}
});


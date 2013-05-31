var href = location.href.split('?sld=');

if(href[1]) {
	localStorage.sld = href[1];
	location.href = href[0];
}

var locale = document.cookie.match(/locale=\s*(.*)\s*(;|$)/);

if (locale && locale[1]) {

	var languaje = locale[1].split('-')[0];

	var dojoConfig = {
		locale : locale[1]
	};

	if ( languaje in {
		ar : 1,
		he : 1,
		iw : 1
	}) {
		(document.body || document.getElementsByTagName('body')[0]).dir = 'rtl';
		var link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href = 'app/resources/app_rtl.css';
		(document.head || document.getElementsByTagName('head')[0]).appendChild(link);
	}

}


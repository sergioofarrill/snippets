

	// This bookmarklet switches between the Dev and Prod environments



var urlBases = {
	'desktop': {
		'dev': 'https://aem-author-prodn1.bmw.com/content/bmwmotorradnsc/marketUS/bmwmotorcycles_com/en_US/',
		'prod': 'http://www.bmwmotorcycles.com'
	}
}

var url = window.location.href;
url = url.replace(new RegExp(urlBases.dev,'g'),'URLBASE');
url = url.replace(new RegExp(urlBases.prod,'g'),'URLBASE');

var targetEnv = (window.location.href.indexOf(urlBases.dev)==-1)?'dev':'prod';
url = url.replace(new RegExp('URLBASE','g'),urlBases[targetEnv]);

window.location.href = url;





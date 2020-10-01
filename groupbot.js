/*
	Author: Daniel Oliveira Souza
	Description: This bot a

*/
var fb_spans = document.getElementsByTagName('span');
var url_regext = new RegExp("https*");

var filter_span = [];

alert(console.dir(filter_span))
for ( var i = 0 ; i < fb_spans.length ; i++){
	if ( ( fb_spans[i].textContent != "" ) && ((url_regext.test(fb_spans[i].textContent) )  == true) ) {
		filter_span.push(fb_spans[i].textContent )
		console.log(fb_spans[i].textContent)

	}
}

for (var i = 0 ; i < filter_span.length;i++){
	console.log(filter_span[i])
}
//typeof(fb_spans);
//alert(fb_spans);
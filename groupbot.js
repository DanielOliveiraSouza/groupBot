/*
	Author: Daniel Oliveira Souza
	Description: This bot a

*/
var fb_spans = document.getElementsByTagName('span');
var url_regext = new RegExp("https:\/\/*");
var filter_span = [];
var fp_path = '/tmp/lista.txt'

for ( var i = 0 ; i < fb_spans.length ; i++){
	if ( ( fb_spans[i].textContent != "" ) && ((url_regext.test(fb_spans[i].textContent) )  == true) ) {
		filter_span.push(fb_spans[i].textContent + '\n\n')
	}
}

alert(filter_span)


/*
	Author: Daniel Oliveira Souza
	Description: This bot a

*/
var fb_spans = document.getElementsByTagName('span');
var url_regext = new RegExp("https:\/\/*");
var filter_span = [];
var fp_path = '/tmp/lista.txt'


//
function getFilterSpan(){
	var bercario_regex = new RegExp('Bercario*')
	var estagio2_regex = new RegExp('Estagio II*');
	for ( var i = 0 ; i < fb_spans.length ; i++){
		if ( ( fb_spans[i].textContent != "" ) && ( url_regext.test(fb_spans[i].textContent ) ) && ! bercario_regex.test(fb_spans[i].textContent) && ! estagio2 ) {
			filter_span.push(fb_spans[i].textContent + '\n\n')
			//filter_span_str+= fb_spans[i].textContent + '\n\n'

		}
	}
}

//retorna a lista de vídeos a ser baixado
function getListVideos(){
	var video_list_downloader = []

	for ( var i = 0; i < filter_span.length;i++){
		var split_filter = filter_span[i].split(' ')
		
		for ( var j = 0 ; j < split_filter.length;j++){
			if  ( url_regext.test(split_filter[j] ) ){ //verifica se split_filter[j] é uma url
				video_list_downloader.push(split_filter[j])
			}
		}
	}

	return video_list_downloader
}


//retorna a lista de pdfs para ser baixado 
function getListPDFs(){
	var pdfs_list = [];
	var pdf_regex = new RegExp('\.pdf');
	var estagio_regex = new RegExp("Estagio*");

	for ( var i = 0; i < filter_span.length;i++){
		var split_filter = filter_span[i].split(' ')
		
		for ( var j = 0; j < split_filter.length;j++){
			if ( pdf_regex.test(split_filter[j]) && ( estagio_regex.test(split_filter[j])  == true ) ){ //verifica se  split_filter[j] tem a expressão regular do \.pdf
				pdfs_list.push(split_filter[j])
			}
		}
	}

	return  pdfs_list


}


function main(){
	getFilterSpan()
	my_v = getListVideos()
	my_pdfs = getListPDFs()
	var obj = [ my_v,my_pdfs]
	copy(obj)
}

main()
/*
	Author: Daniel Oliveira Souza
	Description: This bot a

*/


var fb_spans = document.getElementsByTagName('span');
var url_regext = new RegExp("https:\/\/[A-z0-9\.#]*");
var filter_span = [];
var fp_path = '/tmp/lista.txt'
var obj = null;



//
function getFilterSpan(){
	var bercario_regex = new RegExp('Bercario+|Berçário+|berçário+|BERÇÁRIO+')
	var maternal_regex = new RegExp('MATERNAL+','i')
	var estagio2_regex = new RegExp('Estagio_II+|ESTÁGIO_II+|estágio_II+|estágio[\s]II+|ESTÁGIO[\s]II+|ESTÁGIO II+|II+');
	for ( var i = 0 ; i < fb_spans.length ; i++){
		if ( ( fb_spans[i].textContent != "" ) && ( url_regext.test(fb_spans[i].textContent ) ) 
			&& ! bercario_regex.test(fb_spans[i].textContent) && ! estagio2_regex.test(fb_spans[i].textContent) 
			&& ! maternal_regex.test(fb_spans[i].textContent)){
			filter_span.push(
				{ 
					id: i,
					postContent: fb_spans[i].textContent,
					semana:'',
					urlPost:''
				}
			)
			//filter_span.push(fb_spans[i].textContent)
			//filter_span_str+= fb_spans[i].textContent + '\n\n'

		}
	}
}


//retorna a lista de vídeos a ser baixado
function getListVideos(){
	var video_list_downloader = []

	for ( var i = 0; i < filter_span.length;i++){
		var split_filter = filter_span[i].postContent.split(' ')
		
		for ( var j = 0 ; j < split_filter.length;j++){
			if  ( url_regext.test(split_filter[j] ) && new RegExp('https:\/\/[www\.]*you*').test(split_filter[j])){ //verifica se split_filter[j] é uma url
				var str =  split_filter[j];
				if ( str.includes('[') )
					str=str.substr(0,str.length -str.indexOf('(')).replace('[','').replace(']','')

				if ( str.lastIndexOf('https') > 0 )
					str = str.substr(0,str.length-str.lastIndexOf('https'))

				str = str.replace('\n','')
				video_list_downloader.push(str)
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
		var split_filter = filter_span[i].postContent.split(' ')
		
		for ( var j = 0; j < split_filter.length;j++){
			if ( pdf_regex.test(split_filter[j]) && ( estagio_regex.test(split_filter[j])  == true ) ){ //verifica se  split_filter[j] tem a expressão regular do \.pdf
				pdfs_list.push(split_filter[j])
			}
		}
	}

	return  pdfs_list


}


function getUrlPost(){
	for(i = 0; i < filter_span.length;i++){
		var my_node = fb_spans[filter_span[i].id ]
		var cont = 0;
		while ( my_node != null && my_node.tagName != 'A'){
 		   my_node = my_node.parentElement
    		cont++;
		}
		if ( my_node != null ){
			filter_span[i].urlPost = my_node.getAttribute('href')
		}
	}
}

function main(){
	getFilterSpan()
	getUrlPost()
	my_v =    Array.from ( new Set (getListVideos() ))
	my_pdfs = Array.from ( new Set(getListPDFs()))
	obj = [ my_v,my_pdfs]
	copy(obj)
}

main()	



getUrlPost()
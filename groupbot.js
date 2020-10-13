	/*
		Author: Daniel Oliveira Souza
		Description: Retorna  posts do facebook que contém determinada expressão regular

	*/


	var fb_spans = Array.from (new Set (document.getElementsByTagName('span')) );
	var url_regext = new RegExp("https:\/\/[A-z0-9\.#]*");
	var filter_span = [];
	var fp_path = '/tmp/lista.txt'
	var obj = null;
	var bercario_regex = new RegExp('Bercario+|Berçário+|berçário+|BERÇÁRIO+')
	var maternal_regex = new RegExp('MATERNAL+','i')
	var estagio2_regex = new RegExp('Estagio_II+|ESTÁGIO_II+|estágio_II+|estágio[\s]II+|ESTÁGIO[\s]II+|ESTÁGIO II+|II+')


	//
	function getFilterSpan(){
		
		filter_span =  fb_spans.map(function (mySpan,index){
	        return { id: index, urlPost:'', semana:'', postContent: mySpan.textContent }
	 	}).filter(function(mySpan){ return ( 
	    	( 	mySpan.postContent != "" ) && ( url_regext.test(mySpan.postContent ) ) 
					&& ! bercario_regex.test(mySpan.postContent) && ! estagio2_regex.test(mySpan.postContent) 
					&& ! maternal_regex.test(mySpan.postContent)
			)
		})
	 }


	//retorna a lista de vídeos a ser baixado
	function getListVideos(){


		var video_list_downloader  = Array.from ( new Set (filter_span.map(function(post){
			return post.postContent
		}).reduce((posts,atualPost) => posts + atualPost).split(' ') ) ).filter(function(str){
			return new RegExp('https:\/\/*you*').test(str)
		})


		return video_list_downloader
	}


	//retorna a lista de pdfs para ser baixado 
	function getListPDFs(){
		
		var pdf_regex = new RegExp('\.pdf');
		var estagio_regex = new RegExp("Estagio*");
		var pdfs_list =  Array.from ( new Set (filter_span.map(function(post){
			return post.postContent
		}).reduce((posts,atualPost) => posts  + atualPost).split(' ') ) )
		.filter(function(str){
			console.log(str)
			return pdf_regex.test(str)
		})

		return  pdfs_list


	}

	/*
		*@param myElement
	*/	function getTagA(myElement){
		if( myElement != null &&  myElement.tagName != 'A' ){
			return getTagA(myElement.parentElement)
		}else{
			return myElement;
		}
	}

	function getAttribute(myElement){
		if ( myElement != null ){
			return myElement.getAttribute('href')
		}
		return ''
	}

	function getUrlPost(){
		filter_span = filter_span.map(function (mySpan,index){
			 return { id: mySpan.id, urlPost:getAttribute(getTagA(fb_spans[mySpan.id])), semana:'', postContent: mySpan.postContent }
		})
	}

function main(){
	getFilterSpan()
	getUrlPost()
	my_v =    Array.from ( new Set (getListVideos() )).reverse()
	my_pdfs = getListPDFs().reverse()
	obj = [ my_v,my_pdfs]
	copy(obj)
}

main()	

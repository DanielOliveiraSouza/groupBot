#!/usr/bin/node

const os = require('os')
const fs = require('fs');
const path = require('path');
const emojiStrip = require('emoji-strip')
const ytdl = require ('ytdl-core');


var VIDEOS_DIR = path.resolve(os.homedir(),'AULAS_ANA');

var videos_list = [
    "https://youtu.be/DIwylF8oGaw",
    "https://youtu.be/_d2xYgsJoZM",
    "https://youtu.be/PbnJRsUE6fo",
    "https://youtu.be/mlzVNVzd0c4",
    "https://youtu.be/a0Gmql6Mkfk",
    "https://youtu.be/J-PzokZN9gA",
    "https://youtu.be/fGyZhtTopM4",
    "https://youtu.be/O4bd1JHzcYA",
    "https://youtu.be/fPt-PVYV1Mw",
    "https://youtu.be/WvZJembSNb4",
    "https://youtu.be/4K8BT14yUZA",
    "https://youtu.be/w56Z6FG8fp8",
    "https://youtu.be/EjsPSwmDJMA",
    "https://youtu.be/uzAilH_UT1A",
    "https://youtu.be/Y3qVWS7m02g",
    "https://youtu.be/SyqJjH8R9oM",
    "https://youtu.be/KlKtXxZiAFs",
    "https://youtu.be/h0h3XTJmysM",
    "https://youtu.be/Gh3awD5FVKk",
    "https://youtu.be/PArIr5GtEvQ",
    "https://www.youtube.com/watch?v=55wZEu7IlB8",
    "https://youtu.be/ap8pJpzQ0qU",
    "https://youtu.be/x5Dm5FcvIOw",
    "https://youtu.be/wbNEEQzKpLs",
    "https://youtu.be/CaTXgmHyMSk",
    "https://youtu.be/KAa0mrk4yMY",
    "https://youtu.be/66ZZK64j3E4",
    "https://youtu.be/OfcPip781bA",
    "https://youtu.be/LyqX22qFywg",
    "https://youtu.be/Jz7YGzLca90",
    "https://youtu.be/Fqtxvp9owqM",
    "https://youtu.be/3HcpR3vTopQ",
    "https://youtu.be/95kyNYO6NV8",
    "https://youtu.be/WrV2uq2tGak",
    "https://youtu.be/0b81V-abKNo",
    "https://youtu.be/JHc8gl5uWy4",
    "https://www.youtube.com/watch?v=CZ6HP85KDNo",
    "https://www.youtube.com/watch?time_continue=3&v=aiXj3-u_eWw&feature=emb_logo",
    "https://www.youtube.com/watch?v=ChrVW4ruOPQ",
    "https://youtu.be/AHLSjQDcqsg",
    "https://youtu.be/SyZu0ViRl_A",
    "https://youtu.be/W5lVeBzXduo",
    "https://youtu.be/ngYzSmhqUD0",
    "https://youtu.be/CJ3no-nVWDU",
    "https://youtu.be/6gErX5pNLbU",
    "https://youtu.be/-W0gTyuE3t8",
    "https://youtu.be/ggvjDEpL0eQ",
    "https://youtu.be/vO71ajFPMks",
    "https://youtu.be/3Nl8gQCN1mI",
    "https://youtu.be/Wm6bPczw5Ls",
    "https://youtu.be/2w3Ur5S01dc",
    "https://youtu.be/ojNkgUpeyOk",
    "https://youtu.be/HULog5uNlrw",
    "https://youtu.be/dDGCbDrurTY",
    "https://www.youtube.com/watch?v=D9-F8QDoOvQ",
    "https://www.youtube.com/watch?v=n1KZG26N9D8",
    "https://youtu.be/9wEq8X5hAhY",
    "https://youtu.be/9OsYY90avFg",
    "https://youtu.be/EsG2wPpoIC8",
    "https://youtu.be/Okz41Yrxag8",
    "https://youtu.be/Far1euDx-ps",
    "https://youtu.be/2WlE917KCT8",
    "https://youtu.be/q_QLiXWlqwQ",
    "https://youtu.be/DUEOmaHHnVA",
    "https://www.youtube.com/watch?v=Lq6DSN4uzOU",
    "https://youtu.be/92GYT8hOv4U",
    "https://youtu.be/3RmqRIZTtTU",
    "https://youtu.be/UlN64kOl5jA",
    "https://youtu.be/xwlxvdw9xuM",
    "https://youtu.be/Eiz15wJhT0o",
    "https://youtu.be/UAeoD9-2RIo",
    "https://youtu.be/_2dhQRNHnw0",
    "https://youtu.be/HcVHqp9rnHA",
    "https://www.youtube.com/watch?v=me9K2vUYtTc",
    "https://youtu.be/vt6PraoNCiA",
    "https://youtu.be/MeDBP8OU6q4",
    "https://youtu.be/8EYkFH0Lkh8",
    "https://youtu.be/IBgqekRgwmA",
    "https://youtu.be/ttz20p2Vfh4",
    "https://youtu.be/DoikyWJx4UA",
    "https://youtu.be/MqXzb36kQcc",
    "https://youtu.be/GKriaDCDGDg",
    "https://youtu.be/Kiw1gPPNw5c",
    "https://www.youtube.com/watch?v=ba-wQKDiZIQ",
    "https://youtu.be/3dTretffwGQ",
    "https://youtu.be/nZyu8T98lwg",
    "https://youtu.be/2Dm3bhqWVqk",
    "https://youtu.be/ZbMr2XcdmmU",
    "https://youtu.be/1iLYKZn9Dls",
    "https://youtu.be/C4BEWrTqUqM",
    "https://youtu.be/8kWNh4ubID0",
    "https://youtu.be/vOQvZKGo8m0",
    "https://youtu.be/yryASNptK4Q",
    "https://youtu.be/oRbOej0gpvU",
    "https://youtu.be/zPTgG66XHac",
    "https://youtu.be/EaZczwPkxbI",
    "https://youtu.be/mfJnvTyQMPQ",
    "https://youtu.be/COWJuk_547w",
    "https://youtu.be/ZFsMOaXZRao",
    "https://youtu.be/5M4OtfSAt1k"
  ]

  var atividades_list = [
    "Atividades_complementares_Estagio_I_0607_a_1007.pdf",
    "Atividades_complementares_2906_a_0307_Estagio_I.pdf",
    "Atividades_22_06_a_26_06_Estagio_I.pdf",
    "Atividades_complementares_Estagio_I_2007_a_2407.pdf",
    "Atividades_15_06_a_19_06_Estagio_I.pdf",
    "Atividades_Estagio_1_0105_a_0505.pdf",
    "Atividades_complementares_Estagio_I_1307_a_1707.pdf",
    "Atividades_complementares_Estagio_I_1409_a_1809.pdf",
    "Atividades_complementares_Estagio_I_1708_a_2108.pdf",
    "Atividades_complementares_Estagio_I_de_0307a0707.pdf",
    "Atividades_complementares_Estagio_I_2707_a_3107.pdf",
    "Atividades_complementares_Estagio_I_3108_a_0409.pdf",
    "Atividades_complementares_Estagio_I_2408_a_2808.pdf",
    "Atividades_complementares_Estagio_I_2109_a_2509.pdf",
    "Atividades_complementares_Estagio_I_2809_a_0210.pdf",
    "Atividades_complementares_Estagio_I_0510_a_0910.pdf"
  ]

  
//função para remover todos os caracteres não permitidos em nomes de arquivos
//obs: essa função  foi criado,pois o node.js v12 não possui o metodo String.prototype.replaceAll (ECMA2021)
function replaceSpecialChars(str){
	var count = 0;
	ret = str
	while( count < str.length ) {
		ret = emojiStrip( ret).replace(',','').replace(' ','_').replace('/\//g','').replace('/\s/g','').replace('/\//g','')
		.replace('"','').replace('.','').replace('/','').replace('?','').replace('!','').replace('(','').replace(')','')
		.replace(':','').replace('|','').replace("#",'').replace('__','').replace('--','').replace('_-_','')
		count++;
	}
	return ret
}

/**
	Get youtube video an save in VIDEOS_DIR
	* @param {string} url
	* @param {string} title
*/
async function getVideo(url,title){
	var path_video=path.resolve(VIDEOS_DIR,title)
	

		if ( !fs.existsSync(VIDEOS_DIR) ){  //testa se o dietório VIDEOS_DIR não existe

		fs.mkdir(VIDEOS_DIR, {recursive: false},(err) =>{  //cria o diretório VIDEOS_DIR
			if ( err) throw err;
		});
	}

	if ( ! fs.existsSync(path_video) ){ // verifica se o path_video existe
		
		try{
			var video = await ytdl(url) //baixa o stream de vídeo 

			await video.pipe(fs.createWriteStream(path_video)) //escreve o stream de vídeo em arquivo

			await video.on('error',err=>{ // trata erro de escrita do stream 
				console.log('error in write read/write pipe in url:',url,'\n\n')
				try{ 	//tenta remover arquivo  corrompido

					fs.unlinkSync(path_video) 
				}catch(err){
					console.log('error in del the file',path_video,'\n\n')
				}
			});

			await video.on('end',()=>{
				//console.log('finish download video:',path_video)
				;
			})

		}catch (err) {
			console.log('error on read stream in url:',url,'\n\n');
		}

	}
}



/**
	Try Prepare a download of youtube video
	*@param {string} url - URL od video
	*@param {integer} i  - i  number 
*/

async function downloadTitle(url,i){
 	const options = []
 	var count=0
	var title =  "" ;

	console.log('Trying download: ',url,'...' )
	try { //tenta obter informações sobre o vídeo

		await ytdl.getBasicInfo(url).then(data=>{
			if ( i < 10 )
				title ='video-0' + i.toString() + '-' + data.videoDetails.title.toString()
			else
				title = 'video-' + i.toString() + '-' + data.videoDetails.title.toString();
		});
		
		title = replaceSpecialChars(title)+ '.mp4'
		
		await getVideo(url,title)

	}catch(err){
		console.log('error in get video info:',url,'\n\n')
	}

}

//função para baixar todos os vídeos 
async function getAllTitles(){

	videos_list.map(function(url){
		await downloadTitle(url)
	})
}


//função princiapal
async function main (){
	await getAllTitles()
}

main()
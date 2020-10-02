#!/usr/bin/node


//const MaterialAula = require('MaterialAula')
const fs = require('fs')
const youtubedl = require('youtube-dl')
var FP = 'video-0.mp4';

var videos_list = [
    "https://youtu.be/zPTgG66XHac",
    "https://youtu.be/oRbOej0gpvU",
    "https://youtu.be/yryASNptK4Q",
    "https://youtu.be/vOQvZKGo8m0",
    "https://youtu.be/8kWNh4ubID0",
    "https://youtu.be/C4BEWrTqUqM",
    "https://youtu.be/1iLYKZn9Dls",
    "https://youtu.be/ZbMr2XcdmmU",
    "https://youtu.be/2Dm3bhqWVqk",
    "https://youtu.be/nZyu8T98lwg",
    "https://youtu.be/3dTretffwGQ",
    "https://www.youtube.com/watc",
    "https://youtu.be/vt6PraoNCiA",
    "https://www.youtube.com/watch?v=me9K2vUYtTc",
    "https://youtu.be/HcVHqp9rnHA",
    "https://youtu.be/_2dhQRNHnw0",
    "https://youtu.be/UAeoD9-2RIo",
    "https://youtu.be/Kiw1gPPNw5c",
    "https://youtu.be/GKriaDCDGDg",
    "https://youtu.be/MqXzb36kQcc",
    "https://youtu.be/DoikyWJx4UA",
    "https://youtu.be/ttz20p2Vfh4",
    "https://youtu.be/IBgqekRgwmA",
    "https://youtu.be/8EYkFH0Lkh8",
    "https://youtu.be/MeDBP8OU6q4",
    "https://youtu.be/ojNkgUpeyOk",
    "https://youtu.be/2w3Ur5S01dc",
    "https://youtu.be/Wm6bPczw5Ls",
    "https://youtu.be/3Nl8gQCN1mI",
    "https://youtu.be/vO71ajFPMks",
    "https://youtu.be/EsG2wPpoIC8",
    "https://youtu.be/9OsYY90avFg",
    "https://youtu.be/9wEq8X5hAhY",
    "https://www.youtube.com/watch?v=n1KZG26N9D8",
    "https://www.youtube.com/watch?v=D9-F8QDoOvQ",
    "https://youtu.be/dDGCbDrurTY",
    "https://youtu.be/HULog5uNlrw",
    "https://youtu.be/W5lVeBzXduo",
    "https://youtu.be/SyZu0ViRl_A",
    "https://youtu.be/AHLSjQDcqsg",
    "https://www.youtube.com/watch?v=ChrVW4ruOPQ",
    "https://www.youtube.com/watch?time_continue=3&v=aiXj3-u_eWw&feature=emb_logo",
    "https://www.youtube.com/watch?v=CZ6HP85KDNo",
    "https://youtu.be/JHc8gl5uWy4",
    "https://youtu.be/Eiz15wJhT0o",
    "https://youtu.be/xwlxvdw9xuM",
    "https://youtu.be/UlN64kOl5jA",
    "https://youtu.be/3RmqRIZTtTU",
    "https://youtu.be/92GYT8hOv4U",
    "https://www.youtube.com/watch?v=Lq6DSN4uzOU",
    "https://youtu.be/DUEOmaHHnVA",
    "https://youtu.be/q_QLiXWlqwQ",
    "https://youtu.be/2WlE917KCT8",
    "https://youtu.be/Far1euDx-ps",
    "https://youtu.be/Okz41Yrxag8",
    "https://youtu.be/ggvjDEpL0eQ",
    "https://youtu.be/-W0gTyuE3t8",
    "https://youtu.be/6gErX5pNLbU",
    "https://youtu.be/CJ3no-nVWDU",
    "https://youtu.be/ngYzSmhqUD0",
    "https://youtu.be/66ZZK64j3E4",
    "https://youtu.be/KAa0mrk4yMY",
    "https://youtu.be/CaTXgmHyMSk",
    "https://youtu.be/wbNEEQzKpLs",
    "https://youtu.be/x5Dm5FcvIOw",
    "https://youtu.be/ap8pJpzQ0qU",
    "https://www.youtube.com/watch?v=55wZEu7IlB8",
    "https://youtu.be/PArIr5GtEvQ",
    "https://youtu.be/Gh3awD5FVKk",
    "https://youtu.be/h0h3XTJmysM",
    "https://youtu.be/KlKtXxZiAFs",
    "https://youtu.be/SyqJjH8R9oM",
    "https://youtu.be/Y3qVWS7m02g",
    "https://youtu.be/uzAilH_UT1A",
    "https://youtu.be/EjsPSwmDJMA",
    "https://youtu.be/w56Z6FG8fp8",
    "https://youtu.be/0b81V-abKNo",
    "https://youtu.be/WrV2uq2tGak",
    "https://youtu.be/95kyNYO6NV8",
    "https://youtu.be/3HcpR3vTopQ",
    "https://youtu.be/Fqtxvp9owqM",
    "https://youtu.be/Jz7YGzLca90",
    "https://youtu.be/LyqX22qFywg",
    "https://youtu.be/OfcPip781bA",
    "https://youtu.be/4K8BT14yUZA",
    "https://youtu.be/WvZJembSNb4",
    "https://youtu.be/fPt-PVYV1Mw",
    "https://youtu.be/O4bd1JHzcYA",
    "https://youtu.be/fGyZhtTopM4",
    "https://youtu.be/J-PzokZN9gA",
    "https://youtu.be/a0Gmql6Mkfk",
    "https://youtu.be/mlzVNVzd0c4",
    "https://youtu.be/PbnJRsUE6fo",
    "https://youtu.be/_d2xYgsJoZM",
    "https://youtu.be/DIwylF8oGaw",
    "https://youtu.be/_UdOh8gGruE",
    "https://youtu.be/i6mH9c_I1-Q",
    "https://youtu.be/nytgfz_NpyM",
    "https://youtu.be/78xEaW5GJ0g",
    "https://youtu.be/Md8aeK9HGbo"
  ]

  var atividades_list = [
    "Atividades_complementares_Estagio_I_2809_a_0210.pdf",
    "Atividades_complementares_Estagio_I_2109_a_2509.pdf",
    "Atividades_complementares_Estagio_I_3108_a_0409.pdf",
    "Atividades_complementares_Estagio_I_2408_a_2808.pdf",
    "Atividades_complementares_Estagio_I_1409_a_1809.pdf",
    "Atividades_complementares_Estagio_I_1708_a_2108.pdf",
    "Atividades_complementares_Estagio_I_2707_a_3107.pdf",
    "Atividades_complementares_Estagio_I_de_0307a0707.pdf",
    "Atividades_complementares_Estagio_I_1307_a_1707.pdf",
    "Atividades_15_06_a_19_06_Estagio_I.pdf",
    "Atividades_complementares_Estagio_I_2007_a_2407.pdf",
    "Atividades_22_06_a_26_06_Estagio_I.pdf",
    "Atividades_Estagio_1_0105_a_0505.pdf",
    "Atividades_complementares_2906_a_0307_Estagio_I.pdf",
    "Atividades_complementares_Estagio_I_0607_a_1007.pdf"
  ]






function downloadAllVideos(){
	const options = []
	var url = videos_list[0]
	
	for ( var i=0 ;i < videos_list.lenght;i++) {
		url = videos_list[i];

		var FP='video-' + i.toString() + '.mp4'
		
		var video = youtubedl(url,options,
			['--format=18'],
			{cwd: __dirname});

		video.on('info',function(info){
			console.log('Download is started...')
			console.log('size = ', info.size)
			console.dir(info._filename)
		});

		video.pipe(fs.createWriteStream(FP))

	}

}




function downloadTitle(url){
	const options = []
	youtubedl.getInfo(url,options,async function(err,info){
		if ( err ) throw err;
		
		console.log('title',info.title)
		
		});
}
function getAllTitles(){
	
	
	
	for ( var i = 0 ;i < videos_list.length -1; i++) {
		var url = videos_list[i];

		console.log('url[',i,']','=',url);
		downloadTitle(url)

		
	}
}


//downloadAllVideos()
getAllTitles()

	
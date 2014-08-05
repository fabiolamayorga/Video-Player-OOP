(function(){
	Video = function(pVideo,pPlayBtn,pPauseBtn){
		this.video = pVideo;
		this.playBtn = pPlayBtn;
		this.pauseBtn = pPauseBtn;

	};


	Video.prototype = {
		constructor : Video,

		initVideo : function(){
			alert('initVideo');
		},

		addEventHandlers : function(){
			this.playBtn.videoReference = this.video;
			this.pauseBtn.videoReference = this.video;
			this.playBtn.addEventListener('click', this.playVideo, false);
			this.pauseBtn.addEventListener('click', this.pauseVideo, false);
		},

		playVideo : function(){
			this.videoReference.play();
		},

		pauseVideo : function(){
			this.videoReference.pause();
		},
	};
})();

	function init(){
		var v = document.getElementById('example_video');
		var playBtn = document.getElementById('btn_Play');
		var pauseBtn = document.getElementById('btn_Pause');
		var video = new Video(v, playBtn, pauseBtn);
		video.addEventHandlers();
		//video.playVideo(v);
	}

	window.onload = init;
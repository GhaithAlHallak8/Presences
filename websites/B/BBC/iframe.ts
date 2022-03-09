const iframe = new iFrame();

iframe.on("UpdateData", async () => {
	const video = document.querySelector<HTMLVideoElement>("#p_v_player_0"),
		audio = document.querySelector<HTMLAudioElement>("#p_a_player_0");

	if (!isNaN(video?.duration)) {
		iframe.send({
			video: {
				currentTime: video.currentTime,
				duration: video.duration,
				paused: video.paused
			}
		});
	} else if (!isNaN(audio?.duration)) {
		iframe.send({
			audio: {
				currentTime: audio.currentTime,
				duration: audio.duration,
				paused: audio.paused,
				title: audio.title
			}
		});
	}
});

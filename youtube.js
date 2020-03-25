function pullMusic(code) {
  // This code loads the IFrame Player API code asynchronously.
  var tag = document.createElement("script");

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  let ytCredentials = "AIzaSyDdhpvVdUykO1x3RahLj0FkDhT69hRFjvg";
  let playlistID = songKeys[code];
  let playlist = `https://www.googleapis.com/youtube/v3/playlists?part=snippet&id=${playlistID}&key=${ytCredentials}`;
  var player;

  function onYouTubeIframeAPIReady() {
    player = new YT.Player("attachMusic", {
      height: "390",
      width: "640",
      videoId: "M7lc1UVf-VE",
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
    var inputSearch = document.getElementById("keyword")
    inputSearch.onkeydown = function(event) {
        if (event.keyCode == 13) {
            loadVideo(this.value)
        }
    }
    loadVideo("Đen vâu")
})

var modal = document.getElementById('myModal')

var span = document.getElementsByClassName('close')[0]

var videoFrame = document.getElementById("video-frame")

span.onclick = function() {
    closeVideo()
}

window.onclick = function(event) {
    if (event.target == modal) {
        closeVideo()
    }
}

function loadVideo(keyword) {
    var YOUTUBE_API = "https://content.googleapis.com/youtube/v3/search?q=" + keyword + "&type=video&maxResults=9&part=snippet&key=AIzaSyCO_f4mE8n4Pw1R0XN3xUZO1tXUAXHuCHw"
    var xhr = new XMLHttpRequest()
    xhr.open("GET", YOUTUBE_API, true)
    xhr.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            var responseJson = JSON.parse(this.responseText)
            var htmlContent = ""

            for (var i = 0; i < responseJson.items.length; i++) {
                if(responseJson.items[i].id.kind == 'youtube#chanel') {
                    continue
                }

                var videoId = responseJson.items[i].id.videoId
                var videoTitle = responseJson.items[i].snippet.title
                var videoTitle = responseJson.items[i].snippet.description
                var videoTitle = responseJson.items[i].snippet.thumbnails.medium.url
                htmlContent += '<div class="video" onclick'


            }
        }
    }
}
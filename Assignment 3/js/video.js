// Data for the "HTML Video" Page

var video = {
    controls: true, 
    width: 320,
    height: 240,
    source: [
        {src: "https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/movie.mp4", type: "video/mp4"},
        {src: "https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/movie.ogg", type: "video/ogg"}
    ]
};

window.onload = function() {
    var div = document.querySelector('#vid');
    var vid = document.createElement('video');
    vid.width = video.width;
    vid.height = video.height;

    //if video controls is true, then it will turn on the controls in the document
    video.controls ? vid.controls = true : vid.controls = false;

    video.source.forEach(function(videos){
        var source = document.createElement('source');
        source.src = videos.src;
        source.type = videos.type;
        vid.appendChild(source);
        div.appendChild(vid);
    });
}

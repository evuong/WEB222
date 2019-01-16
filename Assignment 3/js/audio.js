// Data for the "HTML Audio" Page

var audio = {
    controls: true, 
    source: [
        {src: "https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/Track03.mp3", type: "audio/mpeg"},
        {src: "https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/Track03.ogg", type: "audio/ogg"}
    ]
};

window.onload = function () {
    var div = document.querySelector('#aud');
    var aud = document.createElement('audio');

    //if audio controls is true, then it will turn on the controls in the document
    audio.controls ? aud.controls = true : aud.controls = false;

    //putting each audio source and type into the aud element
    audio.source.forEach(function(sound){
        var source = document.createElement('source');
        source.src = sound.src;
        source.type = sound.type;
        aud.appendChild(source);
        div.appendChild(aud);           //appending it back into the div to be displayed on the page
    });

}
"use strict";
function make_album(artist, title) {
    const dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionaries;
}
let album = make_album("Atif Aslam", "Tajdari Haram");
console.log(album);
album = make_album("Ali zafar", "Balaghal ula bikamalihi");
console.log(album);
album = make_album("Abida parveen", "TU jhoom");
console.log(album);

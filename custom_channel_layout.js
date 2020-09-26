/*
* Custom styling behavior that adds and amends to the current layout.
* Additions and behavior done by Quigly the Archivist with
* approval from channel owner, Anschluss.
*
* Version 2020.09.26
*/

var lepGifDiv = document.createElement("div");
lepGifDiv.id = "lepGif";
lepGifDiv.classList.add("col-lg-5 col-md-5");

lepGifDiv.innerHTML = '<img src="https://github.com/intentionallyIncomplete/ansch_cytube_customs/blob/alpha/media_content/leprechaun.gif?raw=true"/>';

var plr = document.getElementById("playlistrow");

// Using insertBefore() to add before first child element.
plr.insertBefore(lepGifDiv, plr.childNodes[0]);

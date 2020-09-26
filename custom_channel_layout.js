/*
* Custom styling behavior that adds and amends to the current layout.
* Additions and behavior done by Quigly the Archivist with
* approval from channel owner, Anschluss.
*
* Version 2020.09.26
*/

let gifURL = "https://github.com/intentionallyIncomplete/ansch_cytube_customs/blob/alpha/media_content/leprechaun.gif?raw=true";

var lepGifDiv = document.createElement("div");
lepGifDiv.id = "lepGif";

var gifDivContent = document.createElement("img");
gifDivContent.src = gifURL;

$("#lepGif").append(gifDivContent);

var plr = document.getElementById("playlistrow");

// Using insertBefore() to add before first child element.
plr.insertBefore(lepGifDiv, plr.childNodes[0]);

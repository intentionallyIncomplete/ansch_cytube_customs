/*
* Custom styling behavior that adds and amends to the current layout.
* Additions and behavior done by Quigly the Archivist with
* approval from channel owner, Anschluss.
*
* Version 2020.09.26
*/

let lepGifDiv = $('<div class="col-lg-5 col-md-5" id="lep_gif"></div>');
let lepGif = document.createTextNode($('<img src="/media_content/leprechaun.gif"/>'));
lepGifDiv.appendChild(lepGif);

$('#playlistrow').append(lepGifDiv);

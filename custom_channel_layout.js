/*
* Custom styling behavior that adds and amends to the current layout.
* Additions and behavior done by Quigly the Archivist with
* approval from channel owner, Anschluss.
*
* Version 2020.09.26
*/

let lepGifDiv = $('<div class="col-lg-5 col-md-5" id="lep_gif"><img src="https://github.com/intentionallyIncomplete/ansch_cytube_customs/blob/alpha/media_content/leprechaun.gif?raw=true"/></div>');

// Using insertBefore() to add before first child element.
var plr = $('#playlistrow');
plr.insertBefore(lepGifDiv, plr.childNodes[0]);

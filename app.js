"use strict";
console.log("Let's get this party started!");


function showGifs(res) {
  $("div").html(res);
}

async function getGiffy() {

  let search = $("inputText").val();
  let response = await axios.post("api.giphy.com/v1/gifs/search", { search });
}

function search(evt) {
  $("#search").on("click", getGiffy);
  event.preventDefault(evt);
}
search();
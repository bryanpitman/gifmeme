"use strict";
console.log("Let's get this party started!");


function showGifs(res) {
  $("div").html(res);
}

/**
 * Get the input text and in response, send get request to API giphy, returns giphy obj
 * setting url to link in giphy obj
 * append img to div
 */
async function getGiffy() {

  let search = $("#inputText").val();
  console.log(search);
  let key = "KvIxjZLWisiNgR92hpRiYpVTyZStjjKq";
  let response = await axios.get("http://api.giphy.com/v1/gifs/search", {params: {q:search, api_key:key}});
  let url = response.data.data[0].images.original.url;

  $("div").append(`<img src = "${url}">`);

  //$(<img></img>)

  //console.log(response);
}

/**
 * when submit button clicked, run getGiffy()
 *
 */
function search(event) {
  // $("#search").on("click", getGiffy(event){
  //   event.preventDefault();
  // });

  $("#search").click(function(event){
    event.preventDefault();
    getGiffy();
  });
}
search();


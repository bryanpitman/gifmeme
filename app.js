"use strict";
console.log("Let's get this party started!");

/**input is a response from the API and appends the img url to the div */
function showGifs(link) {
  let url = link.data.data[0].images.original.url;
  $("div").append(`<img src = "${url}">`);
}

/**
 * Get the input text and in response, send get request to API giphy, returns giphy obj
 * setting url to link in giphy obj

 */
async function getGiffy() {
  let search = $("#inputText").val();
  console.log(search);
  let key = "KvIxjZLWisiNgR92hpRiYpVTyZStjjKq";
  let response = await axios.get("http://api.giphy.com/v1/gifs/search", { params: { q: search, api_key: key } });
  showGifs(response);


}

//removes all images when the remove button is clicked
let $remove = $("#remove");
$remove.on("click", function () {
  $("img").remove();
  console.log("deleted images");
});

/**
 * when submit button clicked, run the function getGiffy()
 *
 */
function search(event) {

  $("#search").click(function (event) {
    event.preventDefault();
    getGiffy();
  });
}


search();


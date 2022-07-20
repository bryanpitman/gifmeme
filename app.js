"use strict";
console.log("Let's get this party started!");


function showGifs(res) {
  $("div").html(res);
}

async function getGiffy() {

  let $search = $("inputText").val();
  console.log($search);
  let key = "KvIxjZLWisiNgR92hpRiYpVTyZStjjKq";
  let response = await axios.get("http://api.giphy.com/v1/gifs/search", {params: {q:$search, api_key:key}});
  // console.log(response.data.data[0].url);
  console.log(response);
}

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


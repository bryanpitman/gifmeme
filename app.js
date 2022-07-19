"use strict";
console.log("Let's get this party started!");


function showGifs(res) {
  $("div").html(res);
}

async function getGiffy() {

  let $search = $("inputText").val();
  console.log($search);
  let response = await axios.get("api.giphy.com/v1/randomid", {params: {$search}});
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


var uri = "https://pokeapi.co/api/v2/pokemon/?limit=25";
var list = document.getElementById("details");

function showList() {
  axios({
    method: "get",
    url: uri,
  })
    .then((response) => {
      console.log(response.data.results);
   
    for(let i=0;i<response.data.results.length;i++)
    {
      let name = response.data.results[i].name;
      list.innerHTML +=`<li>${name}</li>`
    }
     
    })
    .catch((err) => console.log(err));
}

window.addEventListener("DOMContentLoaded", showList);
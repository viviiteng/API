const API_key = "d47d466d9e17ae115fa913954993c5c2";
const URL= "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=d47d466d9e17ae115fa913954993c5c2&hash=752dea075b055fd961776fae22d3ae3b";
const ul= document.getElementById("show_name");

function showSeries(dataArray) {
    for (const item of dataArray) {    
      ul.innerHTML += `<li> ${item.name}</li>`; 
    }
  }

fetch(URL)
  .then(response =>
  {
    if(response.ok)
    {
      return response.json();
    }
    else {
      console.log("Hay Error");
    }
  }).then(respuestaJson =>{
    const array1= respuestaJson.data.results;
    for (let index = 0; index < array1.length; index++) {
      const element = array1[index];
      showSeries(element.series.items);
    }
  }).catch(error => {
    console.error("Hubo un error:", error);
  }); 

  // async function showCharacters() {
//     const response = await fetch(URL);
// if (response.ok) {
//  let characters = response.json;    
// }
// }
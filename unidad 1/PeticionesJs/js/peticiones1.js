

window.onload = function(){

  
// document.getElementById("peticion1").addEventListener("click", function () {
//     console.log("presiono boton");
//     const xhr = new XMLHttpRequest();
//     xhr.withCredentials = true;
  
//     xhr.addEventListener("readystatechange", function () {
//       if (this.readyState === this.DONE) {
//         console.log('entro');
//         console.log(this.responseText);
//       }
//     });
  
//     xhr.open("GET", "https://api.thecatapi.com/v1/images/search?limit=10");
//     xhr.setRequestHeader("Accept", "*/*");
//     xhr.send();
//   });
  

///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////XML//////////////////////////////////////////////////////

document.getElementById("peticion1").addEventListener("click", function(){
    
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.thecatapi.com/v1/images/search?limit=10", true);
  xhr.setRequestHeader("Accept", "application/xml");

  xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
          if (xhr.status === 200) {
              var responseText = xhr.responseText;
              const jsonData = JSON.parse(responseText);
              console.log(jsonData);
              document.getElementById("cat").src=jsonData[0].url;
          } else {
              console.error("Error en la petición:", xhr.status);
          }
      }
  };

  xhr.send();

});


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////async///////////////////////////////////////////////////////////////////////////////////////////

document.getElementById("peticion3").addEventListener("click", async function(){
  let response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");
  let data = await response.json();
  

  document.getElementById("cat").src=data[0].url;

  console.log(data[0].url)

})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////promesa/////////////////////////////////////////////////////////////////////////////////////////////////////////
document.getElementById("peticion2").addEventListener("click", function() {
const apiUrl = "https://api.thecatapi.com/v1/images/search?limit=10";

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Convertir la respuesta a JSON directamente
    })
    .then(data => {
        //console.log(data);
        console.log(data[0].url)
        document.getElementById("cat").src=data[0].url;

    })
    .catch(error => {
        console.error("Fetch error:", error);
    });
});
//////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////JQuery/////////////////////////////////////////////////////////////////

$("#peticion4").on("click", function() {
const apiUrl = "https://api.thecatapi.com/v1/images/search?limit=10";

$.ajax({
    url: apiUrl,
    method: "GET",
    dataType: "json"
})
.done(function(data) {
  console.log(data[0].url)
  document.getElementById("cat").src=data[0].url;
})
.fail(function(jqXHR, textStatus, errorThrown) {
    console.error("Request failed:", textStatus, errorThrown);
});
});


//////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////Axios/////////////////////////////////////////////////////
document.getElementById("peticion5").addEventListener("click", function() {
const apiUrl = "https://api.thecatapi.com/v1/images/search?limit=10";

axios.get(apiUrl)
    .then(response => {
      console.log(response.data[0].url)
      document.getElementById("cat").src=response.data[0].url;
    })
    .catch(error => {
        console.error("Request error:", error);
    });
});


/*
document.getElementById("peticion2").addEventListener("click", async function(){
let headersList = {
  "Accept": "",
  "User-Agent": "Thunder Client (https://www.thunderclient.com)"
 }
 
 let response = await fetch("https://api.thecatapi.com/v1/images/search?limit=15", { 
   method: "GET",
   headers: headersList
 });
 
 let data = await response.text();
 console.log(data);
});

*/ 




/*

let headersList = {
  "Accept": "",
  "User-Agent": "Thunder Client (https://www.thunderclient.com)"
 }
 
 let response = await fetch("https://api.thecatapi.com/v1/images/search?limit=15", { 
   method: "GET",
   headers: headersList
 });
 
 let data = await response.text();
 console.log(data);
 

 */

/*

parametros de jquery

$(document).ready(function(){
          
  $('#peticion').click(async function(){
      let response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10", { 
      method: "GET",
      headers: headersList
      });

      let data = await response.text();
      console.log(data);
  });
});

*/

}


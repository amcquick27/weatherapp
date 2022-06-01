$(".search").click(function(){
  let userInput = $(".location-input").val();
  
  fetch (`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&APPID=3bb00f30e525b91a1deb9cbd20254379`)
  .then(function(response){
    return response.json();
  })
  .then(function(){
   $(".results").html(``) 
  });
  
})
 

$(".search").click(function () {
  let userInput = $(".location-input").val();

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&units=imperial&APPID=3bb00f30e525b91a1deb9cbd20254379`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      $(".temp").html(`<p> '${data.main.temp}' </p>`);
      $(".feels-like").html(`<p> '${data.main.feels_like}' </p>`);
      $(".min-temp").html(`<p> '${data.main.temp_min}' </p>`);
      $(".max-temp").html(`<p> '${data.main.temp_max}' </p>`);
      $(".pressure").html(`<p> '${data.main.pressure}' </p>`);
      $(".humidity").html(`<p> '${data.main.humidity}' </p>`);

      console.log(data.weather.main);

      fetch(
        `https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=pg&api_key=tTVMCPwEb1NapUWHla1pBNt4jKlfEqo1`
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          $(".img").html(
            `<img src = '${data.data[0].images.original.url}' />`
          );
        });
    });
});

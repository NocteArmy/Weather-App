$(document).ready(() => {
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      var currentLatitude = Math.round(position.coords.latitude * 1000) /1000;
      var currentLongitude = Math.round(position.coords.longitude * 1000) / 1000;
      $.ajax( {
        url: "https://fcc-weather-api.glitch.me/api/current?lon=" + currentLongitude + "&lat=" + currentLatitude,
        success: (data) => {
          $("#location").html(data.name + ", " + data.sys.country);
          $("#temperature").html(Math.round(data.main.temp * 10) / 10);
          $("#status").html(data.weather[0].main);
          $("#weather-icon").attr("src", data.weather[0].icon);
        }
      });
    });
  }
  $("#degrees").on('click', () => {
    if(encodeURIComponent($("#degrees").html()) == "%E2%84%83") {
      $("#temperature").html(Math.round(($("#temperature").html() * 1.8 + 32) * 10) / 10);
      $("#degrees").html("&#8457;");
    } else {
      $("#temperature").html(Math.round((($("#temperature").html() - 32) / 1.8) * 10) / 10);
      $("#degrees").html("&#8451;");
    }
  });
});
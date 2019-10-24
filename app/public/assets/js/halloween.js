/* global moment */

// When user clicks add-btn
$("#chirp-submit").on("click", function(event) {
  event.preventDefault();
  console.log("Worked");

  // Make a newChirp object
  var newQuiz = {
    question: $("#author").val().trim(),
    userAns: $("#chirp-box").val().trim(),
    created_at: moment().format("YYYY-MM-DD HH:mm:ss")
  };

  console.log(newQuiz);

  // Send an AJAX POST-request with jQuery
  $.post("/api/quiz", newQuiz)
    // On success, run the following code
    .then(function() {

      var row = $("<div>");
      row.addClass("chirp");

      row.append("<p>" + newQuiz.question + " chirped: </p>");
      row.append("<p>" + newQuiz.userAns + "</p>");
      row.append("<p>At " + moment(newQuiz.created_at).format("h:mma on dddd") + "</p>");

      $("#chirp-area").prepend(row);

    });

  // Empty each input box by replacing the value with an empty string
  $("#author").val("");
  $("#chirp-box").val("");
});

// When the page loads, grab all of our chirp

$.get("/api/quiz", function(data) {

  if (data.length !== 0) {

    for (var i = 0; i < data.length; i++) {

      var row = $("<div>");
      row.addClass("chirp");

      row.append("<p>" + data[i].question + " chirped.. </p>");
      row.append("<p>" + data[i].userAns + "</p>");
      row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");

      $("#chirp-area").prepend(row);

    }

  }

});

var map;
function createMap() {
    var options = {
        center: { lat: 39.74, lng: -104.99 },
        zoom: 8
    };
    map = new google.maps.Map(document.getElementById("map"), options);
    //  $("#map").append(map)
    console.log(map)
    infoWindow = new google.maps.InfoWindow;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (p) {
            var position = {
                lat: p.coords.latitude,
                lng: p.coords.longitude
            };

            infoWindow.setPosition(position);
            infoWindow.setContent("Your location");
            infoWindow.open(map);
        }, function () {
            handleLocationError("Geolocation service failed", map.center);
        })
    } else {
        handleLocationError("No geolocation available", map.center);
    }
}
function handleLocationError(content, position) {
    infoWindow.setPosition(position);
    infoWindow.setContent(content);
    infoWindow.open(map);
};





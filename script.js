$("document").ready(function() {
  $.get("https://api.swimresults.de/v1/example/actuator/health/", function(data, status){
    alert("Data: " + data + "\nStatus: " + status);
  });
});
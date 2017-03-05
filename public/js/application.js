$(document).ready(function(){
  $('#color-button').on("click", function(event) {
    event.preventDefault();
    console.log("you clicked me!");
    $.ajax({
      method: 'GET',
      datatype: "json",
      url: "/colors/random"
    }).done(function(response){
      var real = JSON.parse(response)
      console.log(real);
      var cellLocation = $('ul').children()
      var colorUpdate = $(cellLocation[real.cell]).css("background-color", real.color)
    })
  })
});

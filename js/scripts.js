$(document).ready(function() {
  $("#dogBtn").click(function() {
    $("#dog").append("<li>BARK!</li>");
    $("#cat").append("<li>Hiss!</li>");
    $("#dog").children("li").last().click(function() {
      $(this).remove();
    });
    $("#cat").children("li").last().click(function() {
      $(this).remove();
    });
  });

  $("#catBtn").click(function() {
    $("#dog").append("<li>bark bark bark</li>");
    $("#cat").append("<li>Meow!</li>");
    $("#dog").children("li").last().click(function() {
      $(this).remove();
    });
    $("#cat").children("li").last().click(function() {
      $(this).remove();
    });
  });

  $("#clearBtn").click(function() {
    $("#dog").empty();
    $("#cat").empty();
  });

  $("#dogPic").click(function() {
    $("#dog").before("<img src=\"img/dog.jpeg\">");
  });

  $("#catPic").click(function() {
    $("#cat").after("<img src=\"img/cat.jpeg\">");
  });
});

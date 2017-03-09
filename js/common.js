$(document).ready(function(){
    window.onscroll = function() {
          if (window.pageYOffset > 500) {
              $("section#aboutUs").fadeIn();
          } if (window.pageYOffset > 1300) {
              $("#projectShowcase").fadeIn();
              $("#projectShowcase div.notebook").addClass("animated slideInLeft").css({visibility: "visible"});
              $("#projectShowcase div.iphone").addClass("animated fadeIn").css({visibility: "visible", animationDelay: "1s"});
          } if (window.pageYOffset > 2100) {
              $("section#banner").fadeIn().addClass("animated fadeIn");
          } if (window.pageYOffset > 2800) {
              $("section#ourTeam").fadeIn().addClass("animated fadeIn");
          } if (window.pageYOffset > 2700) {
              $("section#banner2").fadeIn().addClass("animated fadeIn");
          }
    };
    $("#banner button.close").click(function(){
      $("#banner").fadeOut().remove();
    });
    $("#banner2 button.close").click(function(){
      $("#banner2").fadeOut().remove();
    });
});
$(document).ready(function() {
  //If one project is clicked
  $('.thumb').on("click", function(e) {
    $(".work").remove();
    var mydiv = $(this).parent().nextAll(".cb:first");
    var links = $(this).parent().find("aside a");
    var infos = $(this).parent().find("aside .infos");

    $(mydiv).after('<section class="work"><div class="slideshow" style="left: 0px; opacity: 1;"><div class="nivoSlider" style="position: relative;"></div></div></section>');
    $(".work").append(infos);
    $(".nivoSlider").append(links);
    $(".nivoSlider a").toggleClass("nivo-imageLink");

    //loop links and change span into img
    $('.nivoSlider span').replaceWith(function() {
      return $('<img src="'+ $(this).text() +'" />', {
      });
    });
  });

  setInterval(function(){
    $(".nivo-imageLink:first-child").animate({"margin-left": -488}, 800, function(){
      $(this).css("margin-left", 0).appendTo(".nivoSlider");
    });
  }, 3500);
})

$(document).ready(function() {
  var actSection = "";
  function hide_active_section() {
    if(actSection === "Portfolio")
      $('#portfolio *').hide();
    else if(actSection === "Projets")
      $('.projects *').hide();
    else if(actSection === "Compétences")
      $('.skills *').hide();
    else if(actSection === "Contact")
      $('.contact *').hide();
  }
  function showProjects(pthis) {
    $('h1').text("Projets");
    $('.subtitle').text("Mes projets en cours");
    hide_active_section();
    $('.projects').css({"display": "block"});
    $('.projects *').css({"display": "block"});
  }
  function showComp(pthis) {
    $('h1').text("Mes compétences");
    $('.subtitle').text("Ce que je sais faire");
    hide_active_section();
    $('.skills').css({"display": "inline"});
    $('.skills *').css({"display": "inline"});
  }
  function showPortfolio(pthis) {
  /*  $('h1').text("Portfolio");
    $('.subtitle').text("Mes réalisations");
    hide_active_section();
    $('#portfolio *').show();
    $('section.works article').css({"display": "inline-block"});*/
    var href = 'index.html';
    $(location).attr('href', 'index.html');
  }
  function showContact(pthis) {
    $('h1').text("Me contacter");
    $('.subtitle').text("M'envoyer un pigeon électronique");
    hide_active_section();
    $('.contact').css({"display": "inline"});
  }

  $('nav a').off('click').on("click", function(e) {
    e.preventDefault();
    actSection = $('.active').text();

    if($(this).not(".active").length > 0) {
      $('.active').removeClass('active');
      $(this).toggleClass('active');

      if($(this).text() === 'Projets')
        showProjects(this);
      else if($(this).text() === 'Compétences')
        showComp(this);
      else if($(this).text() === 'Portfolio')
        showPortfolio(this);
      else
        showContact(this);
    }
  });

  //si click sur projet
  $('.thumb')/*.off('click')*/.on("click", function(e) {
    //e.preventDefault();
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

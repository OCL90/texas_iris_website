// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require jquery.turbolinks
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).on("turbolinks:load", function(){
	$('.carousel').carousel();
    $(window).scroll(function() {
      $(".slideanim").each(function(){
        var pos = $(this).offset().top;

        var winTop = $(window).scrollTop();
          if (pos < winTop + 600) {
            $(this).addClass("fadeIn");
          }
      });
    });

  gallery(true, '.preview_image');

  function disableButtons(counter_max, counter_current){
    $('#previous-image, #next-image').show();
    if(counter_max == counter_current){
      $('#next-image').hide();
    } else if (counter_current == 1){
      $('#previous-image').hide();
    }
  }
  function gallery(equalId, setAttr){
    var current_image;
    var imgSelect;
    var counter = 0;

    $('#next-image, #previous-image').click(function(){
      if($(this).attr('id') == 'previous-image'){
        current_image--;
      } else {
        current_image++;
      }

      imgSelect = $('[data-image-id="' + current_image + '"]');
      updateGallery(imgSelect);
    });

    function updateGallery(imgSelect) {
      current_image = imgSelect.data('image-id');
      // $('#image-gallery-caption').text(imgSelect.data('caption'));
      $('#image-gallery-title').text(imgSelect.data('title'));
      $('.texas_iris_modal').attr('src', imgSelect.data('image'));
      disableButtons(counter, imgSelect.data('image-id'));
    }

    if(equalId == true){
      $('[data-image-id]').each(function(){
          counter++;
          $(this).attr('data-image-id',counter);
      });
    }
    $(setAttr).on('click',function(){
      updateGallery($(this));
    });
  }
});

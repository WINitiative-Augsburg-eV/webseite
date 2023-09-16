
      (function ($) {"use strict";

      $(function () {
        var header = $(".start-style");
        $(window).scroll(function () {
          var scroll = $(window).scrollTop();

          if (scroll >= 10) {
            header.removeClass('start-style').addClass("scroll-on");
          } else {
            header.removeClass("scroll-on").addClass('start-style');
          }
        });
      });

      //Animation

      $(document).ready(function () {
        $('body.hero-anime').removeClass('hero-anime');
      });

      //Menu On Hover

      $('body').on('mouseenter mouseleave', '.nav-item', function (e) {
        if ($(window).width() > 750) {
          var _d = $(e.target).closest('.nav-item');_d.addClass('show');
          setTimeout(function () {
            _d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
          }, 1);
        }
      });

    })(jQuery);

// Blank Target External Links
$(document.links).filter(function() {
return this.hostname != window.location.hostname;
}).attr('target', '_blank');


// brauereiführung
document.addEventListener("DOMContentLoaded", function () {
  // Get checkbox elements
  const specificCheckbox = document.getElementById("specificCheckbox");
  const requiredCheckbox = document.getElementById("requiredCheckbox");
  const requiredCheckboxContainer = document.getElementById("requiredCheckboxContainer");
  const myForm = document.getElementById("myForm");

  // Add an event listener to the specificCheckbox
  specificCheckbox.addEventListener("change", function () {
      if (specificCheckbox.checked) {
          requiredCheckboxContainer.style.display = "block";
          requiredCheckbox.setAttribute("required", "required");
      } else {
          requiredCheckboxContainer.style.display = "none";
          requiredCheckbox.removeAttribute("required");
          requiredCheckbox.checked = false; // Uncheck the required checkbox
      }
  });

  
});



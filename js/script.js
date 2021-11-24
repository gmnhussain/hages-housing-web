var screenWidth, screenHeight;
var primarySlider = undefined;

const setDimensions = function () {
  screenWidth = $(window).width();
  screenHeight = $(window).height();
};

const initPrimarySlider = () => {
  let captions = ["WELCOME", "THE HOUSING", "CONTACT"];

  const buildSlider = (direction) => {
    if (direction == "vertical") {
      primarySlider = new Swiper(".primary-slider", {
        direction: "vertical",
        speed: 400,
        loop: false,
        autoHeight: true,
        mousewheel: true,
        pagination: {
          el: ".primary-slider-pagination",
          type: "bullets",
          clickable: true,
          renderBullet: function renderBullet(index, className) {
            return (
              '<div class="' +
              className +
              '">' +
              '<span class="caption">' +
              captions[index] +
              "</span>" +
              '<span class="counter">0' +
              (index + 1) +
              "</span></div>"
            );
          },
        },
        parallax: true,
      });
    } else {
      primarySlider = new Swiper(".primary-slider", {
        direction: "horizontal",
        speed: 800,
        loop: false,
        autoHeight: true,
        mousewheel: true,
        keyboard: true,
        pagination: {
          el: ".primary-slider-pagination",
          type: "bullets",
          clickable: true,
          renderBullet: function renderBullet(index, className) {
            return (
              '<div class="' +
              className +
              '">' +
              '<span class="caption">' +
              captions[index] +
              "</span>" +
              '<span class="counter">0' +
              (index + 1) +
              "</span></div>"
            );
          },
        },
        parallax: true,
      });
    }
  };

  if (primarySlider != undefined) {
    primarySlider.destroy();
    primarySlider = undefined;
    console.log("resized");
  }

  if (screenWidth > 1200) {
    buildSlider("horizontal");
  } else {
    buildSlider("vertical");
  }
};

$(window).on("load resize", function () {
  setDimensions();
  initPrimarySlider();
  $(".preloader").fadeOut();
  $(".intro-textbox").addClass("active");
  $(".intro-textbox-button").on("click", function () {
    $(".intro").fadeOut();
  });
});

// primary slider mobile modal
$("[data-modal-btn]").on("click", function (e) {
  e.preventDefault();
  let number = $(this).attr("data-modal-btn");
  $("[data-modal]").removeClass("active");
  $(`[data-modal="${number}"]`).addClass("active");
});

$("[data-modal-close-btn]").on("click", function (e) {
  e.preventDefault();
  let number = $(this).attr("data-modal-close-btn");
  $(`[data-modal="${number}"]`).removeClass("active");
});

$('.input-item input[type="text"], .input-item textarea').on(
  "focusin",
  function () {
    $(this).parent().find("label").hide();
  }
);

$('.input-item input[type="text"], .input-item textarea').on(
  "focusout",
  function () {
    let val = $(this).val();
    if (val == "") {
      $(this).parent().find("label").show();
    } else {
      $(this).parent().find("label").hide();
    }
  }
);

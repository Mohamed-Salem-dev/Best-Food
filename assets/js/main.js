//  ====================================================================================================================================
let btnToggle = document.querySelector(".btn-navbar-toggler");
let listNav = document.querySelector(".box-navbar-nav");
let btnCloseNav = document.querySelector(".btn-close-nav");

document.addEventListener("DOMContentLoaded", () => {
  // createElement in Dom
  let layerScreen = document.createElement("div");
  layerScreen.className = "box-layer-screen";
  layerScreen.textContent = "";
  // تحديد المكان الذي تريد إضافة العنصر إليه، هنا نضيفه إلى body
  document.body.appendChild(layerScreen);
  let navbarComprehensive = document.querySelector(".box-navbar");
  layerScreen.remove();

  //   --------------------------------------------------
  btnToggle.onclick = () => {
    // console.log("btnToggle");
    listNav.classList.toggle("active");

    // ---------------------
    if (layerScreen && !navbarComprehensive.contains(layerScreen)) {
      navbarComprehensive.appendChild(layerScreen); // إعادة إضافة العنصر إلى DOM
      setTimeout(() => {
        layerScreen.classList.add("visible");
      }, 10); // تأخير بسيط للسماح بإعادة إضافة العنصر إلى DOM
    } else if (layerScreen && navbarComprehensive.contains(layerScreen)) {
      layerScreen.classList.toggle("visible");
    }
  };

  //   -----------------------------
  btnCloseNav.onclick = () => {
    console.log("btnCloseNav");
    listNav.classList.remove("active");

    //-------------------
    if (layerScreen && navbarComprehensive.contains(layerScreen)) {
      layerScreen.classList.remove("visible");

      setTimeout(() => {
        layerScreen.remove();
      }, 500); // تأخير إزالة العنصر حتى تنتهي الانتقالية
    }
  };

  // -------------------------------
  layerScreen.onclick = () => {
    console.log("layerScreen");
    listNav.classList.remove("active");
    if (layerScreen && navbarComprehensive.contains(layerScreen)) {
      layerScreen.classList.remove("visible");

      setTimeout(() => {
        layerScreen.remove();
      }, 500); // تأخير إزالة العنصر حتى تنتهي الانتقالية
    }
  };
});

// ----------------------------------------------------

// Navbar
// $(window).scroll(function () {
//   // console.log("Hello");
//   let wScroll = $(window).scrollTop();

//   if (wScroll > 50) {
//     $(".box-navbar").addClass("nav-sticky");

//   } else {
//     $(".box-navbar").removeClass("nav-sticky");
//   }
// });

// ---------------------------------------------------

$(window).scroll(function () {
  let wScroll = $(window).scrollTop();
  console.log("Scroll position:", wScroll);

  if (wScroll > 50) {
    console.log("Adding nav-sticky class");
    $(".box-navbar").addClass("nav-sticky");
  } else {
    console.log("Removing nav-sticky class");
    $(".box-navbar").removeClass("nav-sticky");
  }
});

// =========================================================================================
var swiper = new Swiper(".mySwiperCategory", {
  slidesPerView: 1,
  spaceBetween: 10,
  grabCursor: true,
  loop: true,
  rtl: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
});

// ------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  var image = document.querySelector(".img-box6 .img1 img");
  var targetSection = document.querySelector(".box-Discover-authentic-taste");

  if (image && targetSection) {
    document.addEventListener("scroll", function () {
      var sectionTop = targetSection.getBoundingClientRect().top;
      var sectionHeight = targetSection.offsetHeight;
      var windowHeight = window.innerHeight;
      var maxRotation = 122; // Maximum rotation angle

      // Calculate the percentage of the section that has been scrolled
      var scrollPercentage = Math.min(
        Math.max(
          (windowHeight - sectionTop) / (windowHeight + sectionHeight),
          0
        ),
        1
      );

      // Calculate the rotation angle based on the scroll percentage
      var rotation = scrollPercentage * maxRotation;

      // Apply the rotation to the image
      image.style.transform =
        "translate3d(0px, 0px, 0px) rotate(" + rotation + "deg)";
    });
  } else {
    console.error("Image or target section not found.");
  }
});
// ------------------------------------

var swiper = new Swiper(".mySwiperEnjoyDelicious", {
  slidesPerView: 1,
  spaceBetween: 10,
  grabCursor: true,
  loop: true,
  rtl: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

// -----------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  const link = document.querySelector(".link-Product-details");
  const footer = document.getElementById("copyrights");

  if (link && footer) {
    window.addEventListener("scroll", () => {
      const footerTop = footer.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;

      if (footerTop < viewportHeight && footerTop > 0) {
        link.classList.add("hidden");
      } else {
        link.classList.remove("hidden");
      }
    });
  } else {
    console.error("Element(s) not found.");
  }
});

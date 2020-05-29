// Expands About section on homepage

function showHide() {
  let about = document.getElementById("about");
  about.classList.toggle("slide")
}

// Tiny Slider modifiers

var slider = tns({
  container: '#slider-work',
  loop: false,
  items: 1,
  navPosition: 'bottom',
  gutter: 50,
  // lazyload: true,
  // lazyloadSelector: '.tns-lazy',
  mouseDrag: true,
  // edgePadding: 20,
  responsive: {
    480: {
      // edgePadding: 100,
      // gutter: 20,
      items: 2,
      slideBy: 2
    },
    768: {
      // gutter: 30,
      items: 3.3,
      slideBy: 3
    },
  }
});

var slider = tns({
  container: '#slider-experience',
  loop: false,
  items: 1,
  navPosition: 'bottom',
  gutter: 50,
  // lazyload: true,
  // lazyloadSelector: '.tns-lazy',
  mouseDrag: true,
  // edgePadding: 20,
  responsive: {
    480: {
      // edgePadding: 100,
      // gutter: 20,
      items: 2,
      slideBy: 2
    },
    768: {
      // gutter: 30,
      items: 3.3,
      slideBy: 3
    },
  }
});

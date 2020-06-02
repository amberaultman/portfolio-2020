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
  gutter: 0,
  edgePadding: 20,
  speed: 600,
  slideBy: 'page',
  mouseDrag: true,
  arrowKeys: true,
  nav: false,
  controlsText: ['<ion-icon name="arrow-back-outline"></ion-icon>', '<ion-icon name="arrow-forward-outline"></ion-icon>'],
  controlsContainer: '.controls',
  responsive: {
    480: {
      items: 2,
      gutter: 20,
      edgePadding: 40
    },
    768: {
      items: 3,
      gutter: 30,
      edgePadding: 60
    },
    1200: {
      items: 4,
      gutter: 40,
      edgePadding: 80
    },
    1920: {
      items: 5,
      gutter: 50,
      edgePadding: 100
    }
  }
});

// var slider = tns({
//   container: '#slider-experience',
//   loop: false,
//   items: 1,
//   navPosition: 'bottom',
//   gutter: 50,
//   slideBy: 'page',
  // lazyload: true,
  // lazyloadSelector: '.tns-lazy',
  // mouseDrag: true,
  // edgePadding: 20,
  // responsive: {
  //   480: {
  //     edgePadding: 100,
  //     gutter: 20,
  //     items: 2,
  //     slideBy: 2
  //   },
  //   768: {
  //     gutter: 30,
  //     edgePadding: 50,
  //     items: 3,
  //   },
  // }
// });

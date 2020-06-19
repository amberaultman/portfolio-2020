// Expands About section on homepage

function showHide() {
  let about = document.getElementById("about");
  about.classList.toggle("slide");
  let rotateIcon = document.getElementById("arrow");
  rotateIcon.classList.toggle("rotate");
}

// Tiny Slider modifiers

var slider = tns({
  container: '#slider-work',
  loop: false,
  items: 1,
  navPosition: 'bottom',
  gutter: 10,
  edgePadding: 20,
  speed: 600,
  slideBy: 'page',
  mouseDrag: true,
  arrowKeys: true,
  nav: false,
  autoHeight: false,
  controlsText: ['<ion-icon name="arrow-back-outline"></ion-icon>', '<ion-icon name="arrow-forward-outline"></ion-icon>'],
  controlsContainer: '.controls-work',
  responsive: {
    560: {
      items: 2,
      gutter: 20,
      edgePadding: 40
    },
    960: {
      items: 3,
      gutter: 30,
      edgePadding: 60
    },
    1440: {
      items: 4,
      gutter: 40,
      edgePadding: 80
    },
    2600: {
      items: 5,
      gutter: 50,
      edgePadding: 100
    }
  }
});

var slider = tns({
  container: '#slider-experience',
  loop: false,
  items: 1,
  navPosition: 'bottom',
  gutter: 10,
  edgePadding: 20,
  speed: 600,
  slideBy: 'page',
  mouseDrag: true,
  arrowKeys: true,
  nav: false,
  autoHeight: false,
  controlsText: ['<ion-icon name="arrow-back-outline"></ion-icon>', '<ion-icon name="arrow-forward-outline"></ion-icon>'],
  controlsContainer: '.controls-experience',
  responsive: {
    560: {
      items: 2,
      gutter: 20,
      edgePadding: 40
    },
    960: {
      items: 3,
      gutter: 30,
      edgePadding: 60
    },
    1440: {
      items: 4,
      gutter: 40,
      edgePadding: 80
    },
    2600: {
      items: 5,
      gutter: 50,
      edgePadding: 100
    }
  }
});
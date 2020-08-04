// Expands About section on homepage

function showHide() {
  let about = document.getElementById("about");
  about.classList.toggle("slide");
  let rotateIcon = document.getElementById("arrow");
  rotateIcon.classList.toggle("rotate");
}


// Vanilla JavaScript Scroll to Anchor
// @ https://perishablepress.com/vanilla-javascript-scroll-anchor/

(function() {
	scrollTo();
})();

function scrollTo() {
	const links = document.querySelectorAll('.scroll');
	links.forEach(each => (each.onclick = scrollAnchors));
}

function scrollAnchors(e, respond = null) {
	const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
	e.preventDefault();
	var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
	const targetAnchor = document.querySelector(targetID);
	if (!targetAnchor) return;
	const originalTop = distanceToTop(targetAnchor);
	window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
	const checkIfDone = setInterval(function() {
		const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
		if (distanceToTop(targetAnchor) === 0 || atBottom) {
			targetAnchor.tabIndex = '-1';
			targetAnchor.focus();
			window.history.pushState('', '', targetID);
			clearInterval(checkIfDone);
		}
	}, 100);
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
  lazyload: true,
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
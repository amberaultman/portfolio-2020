
// Expands About section on homepage
// function showHide() {
//     let about = document.getElementById("about");
//     if (about.style.display === "none") {
//       about.style.display = "grid";
//     } else {
//       about.style.display = "none";
//     }
//   }

  function showHide() {
    let about = document.getElementById("about");
    about.classList.toggle("slide-open")
  }
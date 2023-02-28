// Get the button
let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};


  

// go to top
function scrollFunction() {
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }

  if (document.body.scrollTop > 10 ) {
    document.querySelector(".drop").style.display = "none";
  } else {
    document.querySelector(".drop").style.display = "block";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const primaryHeader=document.querySelector(".primary-header");
const navToggle=document.querySelector(".mobile-nav-toggle");
const primaryNav=document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {console.log('raboti');
   if (primaryNav.hasAttribute("data-visible")) {
       navToggle.setAttribute("aria-expended", false)
    } else {
     navToggle.setAttribute("aria-expended", true);
   }
   primaryNav.toggleAttribute("data-visible");
   primaryHeader.toggleAttribute("data-overlay");
});

// Get the modal
var modal = document.getElementById('id01');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var modal1 = document.getElementById('id02');
// When the user clicks anywhere outside of the modal1, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}













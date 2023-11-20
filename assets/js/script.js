/* INDEX PAGE */
'use strict';

/*addEvent on element*/
const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}


/*navbar toggle*/
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navbarToggler = document.querySelector("[data-nav-toggler]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  navbarToggler.classList.toggle("active");
}

addEventOnElem(navbarToggler, "click", toggleNav);

const closeNav = function () {
  navbar.classList.remove("active");
  navbarToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNav);



/*header active*/
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});


function sendMail(){
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("phone").value,
  };

  const serviceID = "service_rrts10m";
  const templateID = "template_q1yrnib";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        console.log(res);
        alert("Your message sent successfully!!")

    })
    .catch(err=>console.log(err));

}

function get_response(){
  var params = {
    email: document.getElementById("email_response").value,
  };

  const serviceID = "service_rrts10m";
  const templateID = "template_q1yrnib";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("email_response").value = "";

        console.log(res);
        alert("We will connect with you soon!!")

    })
    .catch(err=>console.log(err));

}





$(document).ready(function(){
  $(".box").slice(0, 3).show();
  $("#loadMore").on("click", function(e){
    e.preventDefault();
    $(".box:hidden").slice(0, 3).slideDown();
    if($(".box:hidden").length == 0) {
      $("#loadMore").text("No Content").addClass("noContent");
    }
  });
  
})
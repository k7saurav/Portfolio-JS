// JavaScript code for Header & nav links color and dropdown menu.....
let toggleBtn = document.querySelector(".toggle-btn");
let toggleBtnIcon = document.querySelector(".toggle-btn i");
let dropDownMenu = document.querySelector(".dropdown-menu");
let header = document.querySelector(".header");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".nav-links li a");

// change toggle button on click
toggleBtn.onclick = function () {
   dropDownMenu.classList.toggle("open");
   const isOpen = dropDownMenu.classList.contains("open");

   toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

// change header and nav links color on scroll
window.onscroll = () => {
   // change active nav links color
   sections.forEach(section => {
      let top = window.scrollY;
      let offSet = section.offsetTop - 150;
      let height = section.offsetHeight;
      let navId = section.getAttribute("id");

      if(top >= offSet && top < (offSet + height)) {
         navLinks.forEach(link => {
            link.classList.remove("activeNav");
            document.querySelector('.nav-links li a[href*=' + navId + ']').classList.add("activeNav");
         });
      }
   });

   // change header color on scroll
   let top = window.scrollY;
   if (top >= 80) {
      header.classList.add("active");
   } else {
      header.classList.remove("active");
   }
};
// Code for Header section is completed...

// Code for tab section of skills.....
let btnSkill = document.getElementById('btn-skill');
let btnCert = document.getElementById('btn-cert');
let tabSkill = document.getElementById('tab-skill');
let tabCert = document.getElementById('tab-cert');
let skillHeading = document.getElementById('h2-skill');

btnSkill.addEventListener('click', ()=> {
   btnSkill.classList.add("activeTab");
   btnCert.classList.remove("activeTab");
   tabCert.style.display = "none";
   tabSkill.style.display = "block";
   skillHeading.innerHTML = "SKILLS";
});

btnCert.addEventListener('click', ()=> {
   btnCert.classList.add("activeTab");
   btnSkill.classList.remove("activeTab");
   tabCert.style.display = "block";
   tabSkill.style.display = "none";
   skillHeading.innerHTML = "CERTIFICATION";
});
// Code for tab section of skills completed...


// Code for download resume.....
let downloadCV = document.getElementById('resume');
downloadCV.addEventListener('click', function() {
   window.location.href = '../public/resume.pdf';
});
// Code for download resume completed...


// Code for store form data into google sheet.....
let form = document.querySelector("form");
	form.addEventListener('submit', (e) => {
		e.preventDefault();

      document.querySelector('#user-msg').innerHTML = "Sending your message...";

		let data = new FormData(form);

		fetch('https://script.google.com/macros/s/AKfycbx6D_YNg-2oAB4MWQRyZrwlwRHOBwJC9HkyCODOS0E0bIg44yov_sjnuuM0FDVYbyiI/exec',
      {
			method:"POST",
			body: data
		})
			.then(response => response.text())
			.then(data => {
            document.querySelector('#user-msg').innerHTML = data;
         });

      let body = document.querySelector('body');
      body.addEventListener('click', () => {
         document.querySelector('#user-msg').innerHTML = "";
      })
	});
// Code for store form data into google sheet completed...


// Code for project popup.....
function showPopup(popupId) {
   const popupBox = document.getElementById(popupId);
   popupBox.style.display = "block";
}
const closeButtons = document.querySelectorAll(".close-popup");

closeButtons.forEach(button => {
   button.addEventListener("click", function() {
      const popupBox = this.closest(".popup-box"); // Find closest container
      popupBox.style.display = "none";
   });
});

document.body.addEventListener("click", function(event) {
      if (event.target.classList.contains("popup-box") || event.target.closest(".popup-box")) {
      // Clicked on popup container or its element - prevent default behavior (if applicable)
      event.stopPropagation(); // Optional: Prevent click from bubbling up to parent elements
   }
});
// Code for project popup completed...


// Code for auto change year in footer.....
let date = new Date();
let year = date.getFullYear();
document.getElementById("year").innerHTML = year;
// Code for auto change year in footer completed...


// Code for typing text animation (using cdn link) in heading.....
let typed = new Typed('#auto-type', {
   strings: ["Developer", "Programmer"],
   typeSpeed: 120,
   backSpeed: 120,
   loop: true
});
// Code for typing text animation in heading completed...
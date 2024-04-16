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
/* ============================================
   CHAPTER 7 EVENTS – PREMIUM EVENTS
   JavaScript (vanilla, no frameworks)
   ============================================ */

/* ---------- WHATSAPP LINK CONSTANT ----------
   EDIT THIS LINK to change the WhatsApp destination
   for every WhatsApp button on the entire site. */
   const WHATSAPP_LINK = "https://wa.link/g6j7ki";
   /* --------------------------------------------- */
   
   document.addEventListener("DOMContentLoaded", function () {
   
     /* ---- Fill all WhatsApp links from the constant ---- */
     var waLinks = document.querySelectorAll('a[data-whatsapp]');
     for (var i = 0; i < waLinks.length; i++) {
       waLinks[i].href = WHATSAPP_LINK;
     }
   
     /* ---- Mobile navigation toggle ---- */
     var navToggle = document.querySelector(".nav-toggle");
     var nav = document.querySelector(".nav");
   
     if (navToggle && nav) {
       navToggle.addEventListener("click", function () {
         nav.classList.toggle("open");
         navToggle.classList.toggle("open");
       });
   
       // Close menu when a nav link is clicked
       var navLinks = nav.querySelectorAll("a");
       for (var j = 0; j < navLinks.length; j++) {
         navLinks[j].addEventListener("click", function () {
           nav.classList.remove("open");
           navToggle.classList.remove("open");
         });
       }
     }
   
     /* ---- Scroll fade-in animation ---- */
     var fadeElements = document.querySelectorAll(".fade-in");
   
     if ("IntersectionObserver" in window) {
       var observer = new IntersectionObserver(function (entries) {
         entries.forEach(function (entry) {
           if (entry.isIntersecting) {
             entry.target.classList.add("visible");
             observer.unobserve(entry.target);
           }
         });
       }, {
         threshold: 0.12,
         rootMargin: "0px 0px -50px 0px"
       });
   
       fadeElements.forEach(function (el) {
         observer.observe(el);
       });
     } else {
       // Fallback: just show everything
       fadeElements.forEach(function (el) {
         el.classList.add("visible");
       });
     }
   
     /* ---- Lightbox for act photos ---- */
     var lightbox = document.getElementById("lightbox");
     var lightboxImg = document.getElementById("lightbox-img");
     var lightboxClose = document.querySelector(".lightbox-close");
   
     if (lightbox && lightboxImg) {
       var photoTriggers = document.querySelectorAll("[data-lightbox]");
   
       for (var k = 0; k < photoTriggers.length; k++) {
         photoTriggers[k].addEventListener("click", function (e) {
           e.preventDefault();
           var imgSrc = this.getAttribute("data-lightbox");
           var imgAlt = this.querySelector("img");
           lightboxImg.src = imgSrc;
           lightboxImg.alt = imgAlt ? imgAlt.alt : "";
           lightbox.classList.add("open");
           document.body.style.overflow = "hidden";
         });
       }
   
       function closeLightbox() {
         lightbox.classList.remove("open");
         document.body.style.overflow = "";
       }
   
       if (lightboxClose) {
         lightboxClose.addEventListener("click", closeLightbox);
       }
   
       lightbox.addEventListener("click", function (e) {
         if (e.target === lightbox) {
           closeLightbox();
         }
       });
   
       document.addEventListener("keydown", function (e) {
         if (e.key === "Escape") {
           closeLightbox();
         }
       });
     }
   
   });
   
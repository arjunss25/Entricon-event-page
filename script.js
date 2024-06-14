


// timer


const countDownDate = new Date("September 26, 2024 00:00:00").getTime();


const x = setInterval(function() {

    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("days").innerText = "0";
        document.getElementById("hours").innerText = "0";
        document.getElementById("minutes").innerText = "0";
        document.getElementById("seconds").innerText = "0";
    }
}, 1000);




// ----------------------------------------------------------------
 // Mobile Menu Toggle
 const menuToggle = document.getElementById('menu-toggle');
 const navLinksMobile = document.querySelector('.nav-links-mobile');

 menuToggle.addEventListener('change', function () {
     if (menuToggle.checked) {
         navLinksMobile.classList.remove('hidden');
         navLinksMobile.classList.add('show');
     } else {
         navLinksMobile.classList.add('hidden');
         setTimeout(() => {
             navLinksMobile.classList.remove('show');
         }, 300);
     }
 });






//  modals



function openModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "block";
  document.body.appendChild(modal)
  document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "none";
  document.body.style.overflow = 'visible';
  document.body.style.overflowX = 'hidden';
}

var modal2 = document.querySelectorAll('.modal2');
modal2.forEach(function(modal) {
  modal.addEventListener('click', function(event) {
      if (event.target === modal) {
          modal.style.display = 'none';
          // lenis.start();
          document.body.style.overflow = 'visible';
          document.body.style.overflowX = 'hidden';
      }
  });
});

var closeButtons = document.querySelectorAll('.modal2 .ri-close-line');
closeButtons.forEach(function(button) {
  button.addEventListener('click', function(event) {
      var modal = button.closest('.modal2');
      modal.style.display = 'none';
      // lenis.start();
      document.body.style.overflow = 'visible';
      document.body.style.overflowX = 'hidden';
  });
});





// gsap
gsap.registerPlugin(ScrollTrigger);


gsap.from(".main-hero-title", {
    duration: 2,
    x: -1000,
    opacity: 0,
    ease: "power4.out"
});


gsap.from(".sub-text p", {
    scrollTrigger: {
        trigger: ".sub-text",
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none none"
    },
    duration: 1.5,
    opacity: 0,
    y: 50,
    ease: "power4.out"
});




gsap.from(".banner-logos img", {
    scrollTrigger: {
        trigger: ".banner-logos",
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none none"
    },
    duration: 1.5,
    opacity: 0,
    y: 50,
    ease: "power4.out",
    stagger: 0.3  
});


gsap.from(".subtitle h2", {
    scrollTrigger: {
        trigger: ".subtitle",
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none none"
    },
    duration: 1.5,
    opacity: 0,
    y: 50,
    ease: "power4.out"
});


gsap.from(".venue-details h3", {
    scrollTrigger: {
        trigger: ".venue-details",
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none none"
    },
    duration: 1.5,
    opacity: 0,
    y: 50,
    ease: "power4.out",
    stagger: 0.3 
});


gsap.from(".hero-btns img", {
    scrollTrigger: {
        trigger: ".hero-btns",
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none none"
    },
    duration: 1.5,
    opacity: 0,
    y: 50,
    ease: "power4.out",
    stagger: 0.3 
});


// timer
gsap.from(".timer-section",{
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:".venue-section",
        scroller:"body",
        // markers:true,
        start:"top 40%",
        end:"top 60%",
        scrub:3
    }
})


gsap.from(".why-title h2", {
    scrollTrigger: {
        trigger: ".why-title",
        start: "top 80%", 
        end: "bottom 60%",  
        toggleActions: "play none none none"  
    },
    duration: 1.5,
    opacity: 0,
    y: 50,
    ease: "power4.out"
});

gsap.from(".Investment-title h2", {
    scrollTrigger: {
        trigger: ".why-title",
        start: "top 80%", 
        end: "bottom 60%",  
        toggleActions: "play none none none"  
    },
    duration: 1.5,
    opacity: 0,
    y: 50,
    ease: "power4.out"
});




gsap.from(".advisory-content .card1", {
    scrollTrigger: {
        trigger: ".advisory-content",  
        start: "top 80%",  
        end: "bottom 60%",  
        toggleActions: "play none none none" 
    },
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2, 
    ease: "power4.out"
});




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
}

var modal2 = document.querySelectorAll('.modal2');
modal2.forEach(function(modal) {
  modal.addEventListener('click', function(event) {
      if (event.target === modal) {
          modal.style.display = 'none';
          // lenis.start();
          document.body.style.overflow = 'visible';
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
  });
});

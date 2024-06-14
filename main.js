// let locoScroll;

// // locomotive
// function locomotiveAnimation(){
//     gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// locoScroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy("#main", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
// });


// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();

// }
// locomotiveAnimation()


/* --Under Dev-- */
// const lenis = new Lenis({
//     wrapper: document.body,
// })

// lenis.on('scroll', ScrollTrigger.update)

// gsap.ticker.add((time)=>{
//   lenis.raf(time * 1000)
// })

// gsap.ticker.lagSmoothing(0)
// ----------------------------------------------------------------


function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
    document.body.appendChild(modal)
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
    lenis.start();
    document.body.style.overflow = 'visible';
    document.body.style.overflowX = 'hidden';
}

var modal3 = document.querySelectorAll('.modal3');
modal3.forEach(function(modal) {
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            // lenis.start();
            document.body.style.overflow = 'visible';
            document.body.style.overflowX = 'hidden';
        }
    });
});

var closeButtons = document.querySelectorAll('.modal3 .ri-close-line');
closeButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        var modal = button.closest('.modal3');
        modal.style.display = 'none';
        // lenis.start();
        document.body.style.overflow = 'visible';
        document.body.style.overflowX = 'hidden';
    });
});













// ----------------------------------------------------------------







// timer


const countDownDate = new Date("September 24, 2024 00:00:00").getTime();


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







// ---------------------------------------------------------------
// footer modals


// function openModal(modalId) {
//     var modal = document.getElementById(modalId);
//     modal.style.display = "block";
    // lenis.stop();
//     document.body.style.overflow = 'hidden';
// }


// function closeModal(modalId) {
//     var modal = document.getElementById(modalId);
//     modal.style.display = "none";
//     // lenis.start();
//     document.body.style.overflow = 'visible';
// }

var modals = document.querySelectorAll('.modal2');
modals.forEach(function(modal) {
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
        // lenis.start();
        document.body.style.overflow = 'visible';
        document.body.style.overflowX = 'hidden';
    });
});


var closeButtons = document.querySelectorAll('.modal2 .ri-close-line');
closeButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        var modal = button.closest('.modal2');
        modal.style.display = 'none';
    });
});

// ----------------------------------------------------------------




// ---------------------------------


// dropdown
// dropdown
document.addEventListener('DOMContentLoaded', function () {
    const aboutLink = document.getElementById('about-link');
    const aboutDropdown = document.getElementById('about-dropdown');

    aboutLink.addEventListener('click', function (event) {
        event.preventDefault();
        aboutDropdown.classList.toggle('show');
        // lenis.stop();
        document.body.style.overflow = 'hidden';
    });

    document.addEventListener('click', function (event) {
        if (!aboutLink.contains(event.target) && !aboutDropdown.contains(event.target)) {
            aboutDropdown.classList.remove('show');
        }
    });

    const dropdownItems = aboutDropdown.querySelectorAll('a[data-target]');
    dropdownItems.forEach(item => {
        item.addEventListener('click', function (event) {
            event.preventDefault();
            const modalId = item.getAttribute('data-target');
            document.getElementById(modalId).classList.add('show');
        });
    });

    const scheduleLink = document.getElementById('schedule-link');
    scheduleLink.addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('modal-schedule').classList.add('show');
        // lenis.stop();
        document.body.style.overflow = 'hidden';
    });

    const paperPresentationLink = document.getElementById('paper-presentation-link');
    paperPresentationLink.addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('modal-paper-presentation').classList.add('show');
        // lenis.stop();
        document.body.style.overflow = 'hidden';
    });

    const bookLink = document.getElementById('book-link');
    const bookDropdown = document.getElementById('book-dropdown');

    bookLink.addEventListener('click', function (event) {
        event.preventDefault();
        bookDropdown.classList.toggle('show');
    });

    document.addEventListener('click', function (event) {
        if (!bookLink.contains(event.target) && !bookDropdown.contains(event.target)) {
            bookDropdown.classList.remove('show');
        }
    });

    const bookDropdownItems = bookDropdown.querySelectorAll('a[data-target]');
    bookDropdownItems.forEach(item => {
        item.addEventListener('click', function (event) {
            event.preventDefault();
            const modalId = item.getAttribute('data-target');
            document.getElementById(modalId).classList.add('show');
            // lenis.stop();
            document.body.style.overflow = 'hidden';
        });
    });

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

    // Mobile Dropdown
    const aboutLinkMobile = document.getElementById('about-link-mobile');
    const aboutDropdownMobile = document.getElementById('about-dropdown-mobile');

    aboutLinkMobile.addEventListener('click', function (event) {
        event.preventDefault();
        aboutDropdownMobile.classList.toggle('show');
    });

    const scheduleLinkMobile = document.getElementById('schedule-link-mobile');
    scheduleLinkMobile.addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('modal-schedule').classList.add('show');
        closeMobileMenu();
        // lenis.stop();
        document.body.style.overflow = 'hidden';
    });

    const paperPresentationLinkMobile = document.getElementById('paper-presentation-link-mobile');
    paperPresentationLinkMobile.addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('modal-paper-presentation').classList.add('show');
        closeMobileMenu();
        // lenis.stop();
        document.body.style.overflow = 'hidden';
    });

    const bookLinkMobile = document.getElementById('book-link-mobile');
    const bookDropdownMobile = document.getElementById('book-dropdown-mobile');

    bookLinkMobile.addEventListener('click', function (event) {
        event.preventDefault();
        bookDropdownMobile.classList.toggle('show');
    });

    const bookDropdownMobileItems = bookDropdownMobile.querySelectorAll('a[data-target]');
    bookDropdownMobileItems.forEach(item => {
        item.addEventListener('click', function (event) {
            event.preventDefault();
            const modalId = item.getAttribute('data-target');
            document.getElementById(modalId).classList.add('show');
            closeMobileMenu();
            // lenis.stop();
            document.body.style.overflow = 'hidden';
        });
    });

    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.addEventListener('click', function (event) {
            if (event.target === modal) {
                modal.classList.remove('show');
                // lenis.start();
                document.body.style.overflow = 'visible';
                document.body.style.overflowX = 'hidden';
            }
        });
    });

    function closeMobileMenu() {
        menuToggle.checked = false;
        navLinksMobile.classList.add('hidden');
        setTimeout(() => {
            navLinksMobile.classList.remove('show');
        }, 300);
    }

    const dropdownItemsMobile = aboutDropdownMobile.querySelectorAll('a[data-target]');
    dropdownItemsMobile.forEach(item => {
        item.addEventListener('click', function (event) {
            event.preventDefault();
            const modalId = item.getAttribute('data-target');
            document.getElementById(modalId).classList.add('show');
            closeMobileMenu();
            // lenis.stop();
            document.body.style.overflow = 'hidden';
        });
    });
});

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('show');
    // lenis.start();
    document.body.style.overflow = 'visible';
    document.body.style.overflowX = 'hidden';
}







// qty
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.package').forEach(packageElement => {
        const minusButton = packageElement.querySelector('.minusButton');
        const plusButton = packageElement.querySelector('.plusButton');
        const quantityDisplay = packageElement.querySelector('.quantityDisplay');
        const originalPrice = parseFloat(packageElement.querySelector('.originalPrice').dataset.price);
        const priceDisplay = packageElement.querySelector('.priceDisplay');
        let quantity = 1;

        const updatePrice = () => {
            const newPrice = originalPrice * quantity;
            priceDisplay.textContent = `₹${newPrice.toFixed(2)}`;
        };

        minusButton.addEventListener('click', () => {
            if (quantity > 1) {
                quantity -= 1;
                quantityDisplay.textContent = quantity;
                updatePrice();
            }
        });

        plusButton.addEventListener('click', () => {
            quantity += 1;
            quantityDisplay.textContent = quantity;
            updatePrice();
        });
    });
});




// gsap


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




// advisory


gsap.registerPlugin(ScrollTrigger);


gsap.from(".advisory-title h2", {
    scrollTrigger: {
        trigger: ".advisory-title",
        start: "top 80%",  
        end: "bottom 60%",  
        toggleActions: "play none none none"  
    },
    duration: 1.5,
    opacity: 0,
    y: -50,
    ease: "power4.out"
});


gsap.from(".sec-1 .card1", {
  scrollTrigger: {
    trigger: ".sec-1",
    start: "top 80%",
    end: "bottom 60%",
    toggleActions: "play none none none"
  },
  duration: 1,
  opacity: 0,
  y: 50,
  ease: "power3.out",
  stagger: 0.3
});


gsap.from(".sec-2 .card1", {
  scrollTrigger: {
    trigger: ".sec-2",
    start: "top 80%",
    end: "bottom 60%",
    toggleActions: "play none none none"
  },
  duration: 1,
  opacity: 0,
  y: 50,
  ease: "power3.out",
  stagger: 0.3
});


gsap.from(".card1 img", {
  scrollTrigger: {
    trigger: ".card1",
    start: "top 80%",
    end: "bottom 60%",
    toggleActions: "play none none none"
  },
  duration: 1,
  opacity: 0,
  y: 50,
  ease: "power3.out",
  stagger: 0.2
});

gsap.from(".card1 .name-sec", {
  scrollTrigger: {
    trigger: ".card1",
    start: "top 80%",
    end: "bottom 60%",
    toggleActions: "play none none none"
  },
  duration: 1,
  opacity: 0,
  y: 50,
  ease: "power3.out",
  stagger: 0.2
});

gsap.from(".card1 .desig", {
  scrollTrigger: {
    trigger: ".card1",
    start: "top 80%",
    end: "bottom 60%",
    toggleActions: "play none none none"
  },
  duration: 1,
  opacity: 0,
  y: 50,
  ease: "power3.out",
  stagger: 0.2
});


// core-team

gsap.from(".core-team h1", {
    scrollTrigger: {
        trigger: ".core-team",
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none none"
    },
    duration: 1,
    opacity: 0,
    y: -50,
    ease: "power3.out"
});


gsap.from(".coreimg-contents .first, .coreimg-contents .Second, .coreimg-contents .third, .coreimg-contents .fourth", {
    scrollTrigger: {
        trigger: ".coreimg-contents",
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none none"
    },
    duration: 1,
    opacity: 0,
    y: 50,
    ease: "power3.out",
    stagger: 0.3
});


gsap.from(".coreimg-contents img", {
    scrollTrigger: {
        trigger: ".coreimg-contents",
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none none"
    },
    duration: 1,
    opacity: 0,
    y: 50,
    ease: "power3.out",
    stagger: 0.3
});


gsap.from(".coreimg-contents head-para", {
    scrollTrigger: {
        trigger: ".coreimg-contents",
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none none"
    },
    duration: 1,
    opacity: 0,
    y: 50,
    ease: "power3.out",
    stagger: 0.3
});



// speakers

gsap.from(".speakers h1", {
    scrollTrigger: {
        trigger: ".speakers",
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none none"
    },
    duration: 1,
    opacity: 0,
    y: -50,
    ease: "power3.out"
});


gsap.from(".box1", {
    scrollTrigger: {
        trigger: ".box1",
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none none"
    },
    duration: 1,
    opacity: 0,
    y: 50,
    ease: "power3.out",
    stagger: 0.3
});


gsap.from(".box1 img", {
    scrollTrigger: {
        trigger: ".box1",
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none none"
    },
    duration: 1,
    opacity: 0,
    y: 50,
    ease: "power3.out",
    stagger: 0.3
});


gsap.from(".box1 .name, .box1 .sub-head", {
    scrollTrigger: {
        trigger: ".box1",
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none none"
    },
    duration: 1,
    opacity: 0,
    y: 50,
    ease: "power3.out",
    stagger: 0.3
});


gsap.from(".box1 .para", {
    scrollTrigger: {
        trigger: ".box1",
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none none"
    },
    duration: 1,
    opacity: 0,
    y: 50,
    ease: "power3.out",
    stagger: 0.3
});











// HERO

gsap.from(".main-hero-title", {
    duration: 2,
    x: -1000,
    opacity: 0,
    ease: "power4.out"
});


gsap.from(".sub-text", {
    duration: 2,
    x: 1000,
    opacity: 0,
    ease: "power4.out"
});

gsap.from(".hero-logo", {
    scrollTrigger: {
        trigger: ".hero-logo",
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none none"
    },
    duration: 1,
    opacity: 0,
    y: 50,
    ease: "power3.out",
    stagger: 0.3
});


gsap.from(".subtitle h2", {
    scrollTrigger: {
        trigger: ".subtitle",
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none none"
    },
    duration: 1,
    opacity: 0,
    y: 50,
    ease: "power3.out"
});


gsap.from(".venue-details h3", {
    scrollTrigger: {
        trigger: ".venue-details",
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none none"
    },
    duration: 1,
    opacity: 0,
    y: 50,
    ease: "power3.out",
    stagger: 0.3
});


gsap.from(".hero-btns img", {
    scrollTrigger: {
        trigger: ".hero-btns",
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none none"
    },
    duration: 1,
    opacity: 0,
    y: 50,
    ease: "power3.out",
    stagger: 0.3
});



// sponsor-title

gsap.from(".sponsors-title h2", {
    scrollTrigger: {
        trigger: ".sponsors-title",
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none none"
    },
    duration: 1,
    opacity: 0,
    y: -50,
    ease: "power3.out"
});



// why-title
gsap.from(".why-title h2", {
    scrollTrigger: {
        trigger: ".why-title",
        start: "top 80%",  
        end: "bottom 60%",  
        toggleActions: "play none none none"  
    },
    duration: 1.5,
    opacity: 0,
    y: -50,
    ease: "power4.out"
});



// conviner-title
gsap.from(".conviner-title h2", {
    scrollTrigger: {
        trigger: ".conviner-title",
        start: "top 80%",  
        end: "bottom 60%", 
        toggleActions: "play none none none"  
    },
    duration: 1.5,
    opacity: 0,
    y: -50,
    ease: "power4.out"
});
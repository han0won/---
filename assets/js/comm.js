AOS.init();

document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".intro-box", {
        scale: 1,
        scrollTrigger: {
          trigger: ".intro-box", 
          start: "top center",  
          end: "top center",  
          scrub: 3,  
        },
    });

    gsap.fromTo(".title", {
        x:"100%",
        }, 
        {
        x:"-150%",
        scrollTrigger: {
          trigger: ".full-screen", 
          start: "top center",  
          end: "bottom",  
          scrub: 3,  
        },
    });

    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".bacchus-history",
        pin: true, 
        start: "top", 
        end: "bottom", 
        scrub: 3, 
        snap: {
          snapTo: "history", 
          duration: 0.2, 
          ease: "Linear",
        },
      },
    })
    tl2.addLabel("history")
    .to(".history-wrap", { x: "-100%"})

  let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".bacchus-type",
        pin: true, 
        start: "top", 
        end: "bottom", 
        scrub: 1, 
        snap: {
          snapTo: "types", 
          duration: 0.2, 
          ease: "Linear",
        },
      },
    });
  tl.addLabel("types")
  .from("#type2", { x:"100%" } )
  .from("#type3", { x:"100%" } )

});
  
const bar = document.querySelector('.menu-icon')
const span1 = document.querySelector('.span1')
const span2 = document.querySelector('.span2')
const span3 = document.querySelector('.span3')

bar.addEventListener('click', function() {
  span1.classList.toggle('click');
  span2.classList.toggle('click');
  span3.classList.toggle('click');
})



$(document).ready(function() {

  $('.menu-icon').click(function() {
    $('.menu-list').toggle();
  });

  $(".brand-site").click(function() {
    $(".brand-site ul").toggle();
  });

  $(".faq-title").click(function() {
    $(this).siblings(".faq-desc").toggle();
  });

})

const counterUp = window.counterUp.default

const callback = entries => {
  entries.forEach(entry => {
      const el = entry.target;
      if (entry.isIntersecting) {
          counterUp(el, {
              duration: 2000,
          });
      }
  });
};

const IO = new IntersectionObserver(callback, { threshold: 1 });

const el = document.querySelector('.counter');
IO.observe(el);


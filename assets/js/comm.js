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
          trigger: ".full_screen", 
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
        scrub: 1, 
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
          // marker: true,
          snapTo: "types", 
          duration: 0.2, 
          ease: "Linear",
        },
      },
    });
  tl.addLabel("types")
  // .from("#type1", { x:"100%" } )
  .from("#type2", { x:"100%" } )
  .from("#type3", { x:"100%" } )

});
  

$(document).ready(function() {
  $(".brand-site").click(function() {
    $(".brand-site ul").toggle();
  });

  $(".faq-title").click(function() {
    $(this).siblings(".faq-desc").toggle();
  });

  $(".counter").counterUp({ delay: 10, time: 1000 });
})



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
    .from(".type1", { x:"100%"} )
    .from(".type2", { y:"100%"} )
    .from(".type3", { x:"-100%"} )
    
});



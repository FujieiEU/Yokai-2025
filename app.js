// GSAP Animation

gsap.registerPlugin(ScrollTrigger);
let mm = gsap.matchMedia();
const tlKv= gsap.timeline({
    scrollTrigger: {
      trigger: ".yokai-kv",
     end: "+=100%",
    pin: true,
    scrub: 1, 
    anticipatePin: 1,
    onLeave: () => {
 
    }
    }
  });
//   mm.add("(min-width: 769px)", () => {
//   // Desktop
//   tlKv.from(".yokai-logo", {
//     y: 250,
//     scale: 3,
//   });
// });

// mm.add("(max-width: 768px)", () => {
//   // Mobile
//   tlKv.from(".yokai-logo", {
//     y: 150,
//     scale: 1.5,
//   });
// });
  tlKv.from(".yokai-kv__subu", {
    y: 100,
    opacity:0,
    duration:10,
  },"<+=0.3")
// gsap.fromTo("#moon-light", 
//   {
//     scale: 1,
//     opacity: 0.6, // slightly dim base
//     filter: "brightness(1)" 
//   }, 
//   {
//     scale: 1.01,  // a bit bigger
//     opacity: 0.8, // brighter
//     filter: "brightness(1.5)", // brighter effect
//     duration: 1.5,
//     yoyo: true,
//     repeat: -1,
//     ease: "sine.inOut"
//   }, "<+=0.3");
  // tlKv.from(".yokai-kv__moon", {
  //   opacity:0,
  //   scale:0,
  //   duration:10,
  // },"<+=0.3")
  // .from(".kv-ofuda--first",{
  //   y:200,
  //   opacity:0,
  // },"<+=0.3")
  // .from(".kv-ofuda--second",{
  //   y:200,
  //   opacity:0,
  // })

const tlStore= gsap.timeline({
    scrollTrigger: {
      trigger: ".subu-yokai-footer",
     end: "+=50%", 
    scrub: 1, 
    anticipatePin: 1, 
    onLeave: () => {
      
    }
    }
  });
 


//Store SUBU Random Rotation

function randomizeCardRotation() {
  const cards = document.querySelectorAll('.subu-yokai-product');

  cards.forEach(card => {
    const rotation = (Math.random() * 10) - 5;
    card.dataset.rotation = rotation;
    card.style.transform = `rotate(${rotation}deg)`;
    card.addEventListener('mouseenter', () => {
      card.style.transform = `rotate(${-rotation}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = `rotate(${rotation}deg)`;
    });
  });
}

randomizeCardRotation();



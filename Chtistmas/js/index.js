gsap.registerPlugin(ScrollTrigger);

const timeline = gsap.timeline();

timeline
  .to(".one", { opacity: 1, duration: 0.5 })
  .to(".one", { opacity: 0, duration: 0.5 })
  .to(".two", { opacity: 1, duration: 0.5 })
  .to(".two", { opacity: 0, duration: 0.5 })
  .to(".three", { opacity: 1, duration: 0.5 })
  .to(".three", { opacity: 0, duration: 0.5 })
  .to(".four", { opacity: 1, duration: 0.5 })
  .to(".four", { opacity: 0, duration: 0.5 })
  .to(".five", { opacity: 1, duration: 0.5 })
  .to(".five", { opacity: 0, duration: 0.5 })
  .to(".six", { opacity: 1, duration: 0.5 })
  .to(".six", { opacity: 0, duration: 0.5 })
  .to(".seven", { opacity: 1, duration: 0.5 });

const timeline2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".Portfolio",
    start: "top top",
    end: "150% bottom",
  },
});

timeline2.to(".PortfolioBox", {
  opacity: 1,
});

timeline2.to(".bounceOne", {
  y: 0,
  duration: 0.3,
  opacity: 1,
  repeat: 3,
  yoyo: true,
});

timeline2.to(
  ".bounceTwo",
  {
    y: -100,
    duration: 0.3,
    opacity: 1,
    repeat: 7,
    yoyo: true,
  },
  "<"
);

timeline2.to(
  ".bounceThree",
  {
    y: 0,
    duration: 0.3,
    opacity: 1,
    repeat: 5,
    yoyo: true,
  },
  "<"
);

const timeline3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".anything",
    pin: true,
    scrub: 1,
    start: "top top",
    end: "300% bottom",
  },
});

timeline3.to(".anythingContainer", {
  x: -11500,
  duration: 5,
});

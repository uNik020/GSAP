var tl = gsap.timeline();

function page1Animation() {
    tl.from("nav h1,nav h4, nav button", {
        y: -30,
        delay: 1,
        duration: 1.5,
    opacity: 0,
    stagger: 0.15,
  });

  tl.from(".center-part1 h1", {
    x: -300,
    duration: 0.7,
    opacity: 0,
  });

  tl.from(".center-part1 p", {
    x: 300,
    duration: 0.8,
    opacity: 0,
  });

  tl.from(".center-part1 button", {
    scale: 0,
    duration: 0.8,
  });

  tl.from(
    ".center-part2 img",
    {
      opacity: 0,
      duration: 0.8,
    },
    "-=2"
  );

  tl.from(".section1bottom img", {
    y: 30,
    duration: 0.6,
    stagger: 0.15,
    opacity: 0,
  });
}

page1Animation();

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".section2",
        scroller:"body",
        start:"top 70%",
        end:"top -20%",
        scrub:2
    }
});

tl2.from(".Projects h3",{
    opacity:0,
    x:-100
},"chicha")
tl2.from(".Projects p",{
    opacity:0,
    x:100
},"chicha")

tl2.from(".elem.line1.left",{
    x:-300,
    opacity:0,
    duration:1
},"line1")
tl2.from(".elem.line1.right",{
    x:300,
    opacity:0,
    duration:1
},"line1")

tl2.from(".elem.line2.left",{
    x:-300,
    opacity:0,
    duration:1
},"line2")
tl2.from(".elem.line2.right",{
    x:300,
    opacity:0,
    duration:1
},"line2")

tl2.from(".elem.line3.left",{
    x:-300,
    opacity:0,
    duration:1
},"line3")
tl2.from(".elem.line3.right",{
    x:300,
    opacity:0,
    duration:1
},"line3")

tl2.from(".elem.line4.left",{
    x:-300,
    opacity:0,
    duration:1
},"line4")
tl2.from(".elem.line4.right",{
    x:300,
    opacity:0,
    duration:1
},"line4")
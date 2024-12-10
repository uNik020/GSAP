function textSplitter() {
  var h1 = document.querySelector("h1");
  var h1Text = h1.textContent;

  var splittedText = h1Text.split("");
  var halfValue =splittedText.length/2;  
  var clutter = "";

    splittedText.forEach(function (e,idx) {
        if(idx<halfValue){
            clutter += `<span class="straight">${e}</span>`;
        }else{
            clutter += `<span class="reverse">${e}</span>`;
        }
    });
    h1.innerHTML = clutter;
}

textSplitter()

gsap.from("h1 .straight",{
    y:70,
    opacity:0,
    duration:1,
    delay:0.5,
    stagger:0.3
})

gsap.from("h1 .reverse",{
    y:70,
    opacity:0,
    duration:1,
    delay:0.5,
    stagger:-0.3
})
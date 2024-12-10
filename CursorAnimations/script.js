var main= document.querySelector('#main')
var cursor= document.querySelector('#cursor')
var imageDiv=document.querySelector('#image')

main.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:0.8,
        ease:"back.out"
    })
})

imageDiv.addEventListener("mouseenter",function(){
    cursor.innerHTML="View more"
    gsap.to(cursor,{
        scale:3,
        backgroundColor:"#999"
    })
})

imageDiv.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale:1,
        backgroundColor:"#fff"
    })
})
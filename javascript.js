function locoscroll(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".Main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".Main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".Main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".Main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locoscroll()
function toggle(){
    let toggle = document.getElementById('toggle_btn');
    let menu = document.getElementById('hiddnmenu');
    let color = document.getElementById('navbar1','navbar');
    toggle.addEventListener("click",()=>{
    menu.classList.toggle('clickmenu');
    color.style.color = (color.style.color === 'white') ? 'black' : 'white';
})
}
toggle()
 function loader(){
    gsap.from('.navlinks',{
        y:-15,
        delay:0.5,
        stagger:0.4
    })
    
    gsap.from('.page1 h1',{
        y:100,
        opacity:0,
        delay:0.8,
        duration:0.8,
        stagger:0.4
    })    
}
 loader()
function page2(){
  gsap.from('.page2', {
      y:100,
      opacity:0,
      delay:0.5,
      duration:0.6,
      stagger:2,
      scrollTrigger:{
      trigger:".page1",
      scroller:".Main",
      start:"top-30vh"
  }
    })
  }
page2();

function productsanimation(){
  gsap.from('.products',{
    y:40,
    opacity:0,
    duration:0.6,
    stagger:0.4,
    scrollTrigger:{
      trigger:".page2",
      scroller:".Main",
      start:"top-90vh"
    }
  })
}
productsanimation()

function mousemove(){
  const enter = document.querySelector('.grid-container1');
  const move = document.querySelector('.color');
  enter.addEventListener("mouseenter",()=>{
    gsap.to(move,{
        scale:1,
        opacity:1
    })
  })
  enter.addEventListener("mouseleave",()=>{
    gsap.to(move,{
        scale:0,
        opacity:0
    })
  })
  enter.addEventListener("mousemove",function(dets){
    gsap.to(move,{
      left:dets.x-80, 
      top:dets.y+80
    })
  })
}
mousemove()

function mousemovee(){
  const enterr = document.querySelector('.grid-container2');
  const movee = document.querySelector('.color1');
  enterr.addEventListener("mouseenter",()=>{
    gsap.to(movee,{
        scale:1,
        opacity:1
    })
  })
  enterr.addEventListener("mouseleave",()=>{
    gsap.to(movee,{
        scale:0,
        opacity:0
    })
  })
  enterr.addEventListener("mousemove",function(dets){
    gsap.to(movee,{
      left:dets.x-80, 
      top:dets.y+80
    })
  })
}
mousemovee()

function gridanimation(){
  gsap.from('.grid-items',{
    y:60,
    opacity:0,
    duration:0.1,
    stagger:0.4,
    scrollTrigger:{
      trigger:".page4",
      scroller:".Main",
      start:"top-50vh"
    }
  })

  gsap.from('.grid-items1',{
    y:60,
    opacity:0,
    duration:0.1,
    stagger:0.4,
    scrollTrigger:{
      trigger:".page4",
      scroller:".Main",
      start:"top-30vh"
    }
  })
}
gridanimation()

function page5(){
  gsap.from('.lastline',{
    y:60,
    opacity:0,
    delay:0.5,
    duration:0.7,
    stagger:0,
    scrollTrigger:{
      trigger:".page5",
      scroller:".Main",
    }
  })
  gsap.from('.center',{
    y:80,
    opacity:0,
    delay:0.5,
    duration:0.8,
    stagger:1,
    scrollTrigger:{
      trigger:".page5",
      scroller:".Main",
    }
  })
}
page5()

function last(){
  gsap.from('.grid-last',{
    y:40,
    opacity:0,
    duration:0.6,
    stagger:0.4,
    scrollTrigger:{
      trigger:".page5",
      scroller:".Main",
      start:"top-10vh"
    }
  })
}
last()

function fotop(){
  gsap.from('.footertop',{
    y:40,
    opacity:0,
    delay:0.8,
    duration:0.4,
    scrollTrigger:{
      trigger:".page6",
      scroller:".Main",
      start:"top-10vh"
    }
  })

  gsap.from('.footerm',{
    y:50,
    opacity:0,
    delay:0.9,
    duration:0.5,
    scrollTrigger:{
      trigger:".footertop",
      scroller:".Main",
    }
  })

  gsap.from('.footerlogo',{
    y:50,
    opacity:0,
    delay:0.2,
    duration:0.3,
    scrollTrigger:{
      trigger:".footertop",
      scroller:".Main",
    }
  })

  gsap.from('.footerm1',{
    y:50,
    opacity:0,
    delay:0.2,
    duration:0.3,
    scrollTrigger:{
      trigger:".footertop",
      scroller:".Main",
    }
  })
}
fotop()

















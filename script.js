
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      loop: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
function lode(){
gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".no"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".no", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },

  pinType: document.querySelector(".no").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
}
lode()

gsap.from("#hh",{
    opacity: 0,
    scale: 0.99,
    duration: 1,
})
gsap.from("#i1",{
    y: 100,
    duration: 1,
    opacity: 0
})
gsap.from("#i2",{
    x: 100,
    duration: 1,
    opacity: 0
},'-=1')
gsap.from("#i3",{
    y: -100,
    duration: 1,
    opacity: 0
},'-=1')
gsap.from(".page2 h1",{
    scrollTrigger: {
        trigger: ".page2",
        scroller: ".no",
        start: "top 65%",
        // markers: "true",
    },
    y: 20,
    opacity: 0,
    delay: .2
})
gsap.from(".page2 h5",{
    scrollTrigger: {
        trigger: ".page2",
        scroller: ".no",
        start: "top 65%",
        // markers: "true",
    },
    y: 20,
    opacity: 0,
    delay: .5
})
gsap.from(".page2 .abo",{
    scrollTrigger: {
        trigger: ".page2",
        scroller: ".no",
        start: "top 65%",
        // markers: "true",
    },
    y: 20,
    delay: .8,
    opacity: 0,
})
gsap.from(".page3 #iii, .page3 #ooo, .page3 #mmm, .page3 #bbb",{
    scrollTrigger: {
        trigger: ".page3",
        scroller: ".no",
        start: "top 60%",
        // markers: "true",
    },
    y: 30,
    opacity: 0,
    delay: .2
})
gsap.from(".page3 h1",{
    scrollTrigger: {
        trigger: ".page3",
        scroller: ".no",
        start: "top 30%",
        // markers: "true",
    },
    y: 20,
    duration: 1,
    opacity: 0,
    delay: 1
})
gsap.from(".page3 p",{
    scrollTrigger: {
        trigger: ".page3",
        scroller: ".no",
        start: "top 30%",
        // markers: "true",
    },
    y: 20,
    duration: 1,
    delay: 1.5,
    opacity: 0,
})
gsap.from(".page3 .lala",{
    scrollTrigger: {
        trigger: ".page3",
        scroller: ".no",
        start: "top 30%",
        // markers: "true",
    },
    y: 20,
    duration: 1,
    delay: 2,
    opacity: 0,
})
gsap.from(".page4 h1",{
    scrollTrigger: {
        trigger: ".page4",
        scroller: ".no",
        start: "top 60%",
    },
    y: 30,
    duration: 1,
    opacity: 0
})
gsap.from(".page5 .box",{
    scrollTrigger: {
        trigger: ".page5",
        scroller: ".no",
        start: "top 70%",
        // markers: "true"
    },
    y: 30,
    duration: 1,
    opacity: 0
})
gsap.from(".page5 .lala #lali",{
    scrollTrigger: {
        trigger: ".page5",
        scroller: ".no",
        start: "top 90%",
        // markers: "true"
    },
    x: 10,
    duration: 1,
    opacity: 0
})
gsap.from(".page7>img",{
    scrollTrigger: {
        trigger: ".page7",
        scroller: ".no",
        start: "top 30%",
        // markers: "true",
        // markers: "true",
    },
    y: 30,
    ease: Expo.easeInOut,
    duration: 0.9,
    opacity: 0,
    scrub: 2
})
gsap.from(".text1",{
    scrollTrigger: {
        trigger: ".page7",
        scroller: ".no",
        start: "top 20%",
        // markers: "true"
    },
    y: 30,
    duration: 1,
    opacity: 0,
})
gsap.from(".text2",{
    scrollTrigger: {
        trigger: ".page7",
        scroller: ".no",
        start: "top 20%",
        // markers: "true"
    },
    y: 30,
    duration: 1,
    opacity: 0,
    delay: 0.5
    
})
gsap.from(".text3",{
    scrollTrigger: {
        trigger: ".page7",
        scroller: ".no",
        start: "top 20%",
        // markers: "true",
    },
    y: 30,
    duration: 1,
    opacity: 0,
    delay: 0.8
})
gsap.from(".text4",{
    scrollTrigger: {
        trigger: ".page7",
        scroller: ".no",
        start: "top 20%",
        // markers: "true",
    },
    y: 30,
    duration: 1,
    opacity: 0,
    delay: 1.3
})
gsap.from(".text5",{
    scrollTrigger: {
        trigger: ".page7",
        scroller: ".no",
        start: "top 20%",
        // markers: "true",
    },
    y: 30,
    duration: 1,
    opacity: 0,
    delay: 1.8
})
// var m = document.querySelector(".part2 a:nth-child(1)")
// var z = document.querySelector(".chupa")
// var flag = 0
// m.addEventListener("click",function(){
//     if(flag===0){
//     z.style.scale = "1"
//     flag=1
//     }
//     else{
//         z.style.scale = "0"
//         flag=0
//     }
// })
// var a = document.querySelector(".nav #i4");
// var b = document.querySelector(".nav #i5");
// var c = document.querySelector(".fuls");
// var d = document.querySelector(".center")
// var e = document.querySelector(".page2")
// a.addEventListener("click",function(){
//     a.style.display = "none";
//     b.style.display = "flex";
//     c.style.display = "flex"
//     d.style.display = "none"
//     e.style.display = "none"
// })
// b.addEventListener("click",function(){
//     a.style.display = "flex"
//     b.style.display = "none"
//     c.style.display = "none"
//     d.style.display = "flex"
//     e.style.display = "flex"
// })
// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: "auto",
//   spaceBetween: 30,
//   loop: true,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });
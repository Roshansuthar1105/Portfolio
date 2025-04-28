let list = document.querySelectorAll(".list");
let items = document.querySelectorAll(".p-card");
let count = document.getElementById("count");
console.log(items.length);
console.log(list.length);
for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function () {
    let x = 0;
    for (let j = 0; j < list.length; j++) {
      list[j].classList.remove("active");
    }
    this.classList.add("active");
    let dataFilter = this.getAttribute("data-filter");
    for (let k = 0; k < items.length; k++) {
      items[k].classList.add("hide");
      items[k].classList.remove("active");

      if (
        items[k].getAttribute("data-item") == dataFilter ||
        dataFilter == "all"
      ) {
        items[k].classList.add("p-card");
        items[k].classList.remove("hide");
        x++;
      }
    }
    // count.innerText = `${x} Items Found`;
    // if (dataFilter == "all") {
    //   count.innerText = ``;
    // }
  });
}
// Add this to your existing script.js file

let navlist = document.querySelectorAll(".nav-bar li");
let Imgs = document.querySelectorAll(".icon-img");
let Imgsrc = document.getElementById("icon-i").src;
let ImgDark = [];
let ImgLight = [];
for (let i = 0; i < Imgs.length; i++) {
  const element = Imgs[i].src;
  ImgLight[i] = Imgs[i].src;
  ImgDark[i] = element.split(".png")[0] + "-active.png";
}
for (let i = 0; i < navlist.length; i++) {
  const element = navlist[i];
  element.addEventListener("click", () => {
    for (let j = 0; j < navlist.length; j++) {
      Imgs[j].src = ImgLight[j];
      navlist[j].classList.remove("active-li");
    }
    Imgs[i].src = ImgDark[i];
    navlist[i].classList.add("active-li");
  });
  // console.log("nasdkjc");
}
let menuButton = document.getElementById("nav-m");
menuButton.addEventListener("click", () => {
  for (let i = 0; i < navlist.length; i++) {
    navlist[i].style.display = "flex";
  }
  menuButton.style.display = "none";
  setTimeout(() => {
    for (let i = 0; i < navlist.length; i++) {
      navlist[i].style.display = "none";
    }
    menuButton.style.display = "flex";
  }, 3000);
});
let sections = document.querySelectorAll(".section");
let ids = [];
for (let i = 0; i < sections.length; i++) {
  const element = sections[i];
  ids[i] = element.getAttribute("id");
}

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    top+=300;
    if (top >= offset && top < offset + height) {
      for (let j = 0; j < navlist.length; j++) {
        Imgs[j].src = ImgLight[j];
        navlist[j].classList.remove("active-li");
      }
      let index = ids.indexOf(id);
      index++;
      Imgs[index].src = ImgDark[index];
      navlist[index].classList.add("active-li");
    }
  });
};
//animations

function page1() {
  var tl = gsap.timeline();
  tl.from(".social-icon", {
    x: -300,
    duration: 0.5,
    stagger: 0.1,
    opacity: 0,
    ease: "none",
  });
  tl.from(".heading.m", {
    opacity: 0,
    y: -200,
    duration: 0.3,
  });
  tl.from(".proffesion.m", {
    y: -80,
    opacity: 0,
    duration: 0.3,
  });
  tl.from(".about-me", {
    opacity: 0,
    x: -80,
    duration: 0.2,
  });
  tl.to(".btn111", {
    opacity: 1,
    duration: 0.8,
  });
  tl.from(
    ".profileImg",
    {
      opacity: 0,
      x: 100,
      duration: 2,
      ease: "elastic.out",
    },
    "-=1"
  );
  tl.from(".scroll-down", {
    opacity: 0,
    y: -30,
    duration: 0.2,
    ease: "elastic.out",
  });
}
// page1();
function page2() {
  var tl = gsap.timeline();
  tl.from("#about-me-page .page-heading", {
    scrollTrigger: {
      scroller: "body",
      trigger: ".page-heading",
      scrub: 2,
      start: "top 50%",
      end: "top 20%",
    },
    x: -200,
    opacity: 0,
  });
  tl.from("#about-me-page .page-subheading", {
    scrollTrigger: {
      scroller: "body",
      trigger: ".page-subheading",
      scrub: 2,
      start: "top 50%",
      end: "top 20%",
    },
    x: 300,
    opacity: 0,
  });

  tl.from(".ab-left img", {
    scrollTrigger: {
      scroller: "body",
      trigger: ".ab-left img",
      scrub: 2,
      start: "top 80%",
      end: "top 30%",
    },
    opacity: 0,
    borderRadius: "80px",
    scale: 0.7,
  });
  tl.from(".ab-right", {
    scrollTrigger: {
      scroller: "body",
      trigger: ".ab-right",
      scrub: 2,
      start: "top 70%",
      end: "top 30%",
    },
    opacity: 0,
  });
}
function page3() {
  gsap.from(".skills.page-heading", {
    scrollTrigger: {
      scroller: "body",
      trigger: ".skills.page-heading",
      scrub: 2,
      start: "top 80%",
      end: "top 60%",
    },
    x: -200,
    opacity: 0,
  });
  gsap.from(".skills.page-subheading", {
    scrollTrigger: {
      scroller: "body",
      trigger: ".skills.page-subheading",
      scrub: 2,
      start: "top 80%",
      end: "top 60%",
    },
    x: 300,
    opacity: 0,
  });
  gsap.from(".l .skill", {
    scrollTrigger: {
      scroller: "body",
      trigger: ".l .skill",
      scrub: 2,
      start: "top 90%",
      end: "top 50%",
    },
    x: -300,
    opacity: 0,
    stagger: 0.3,
  });
  gsap.from(".r .skill", {
    scrollTrigger: {
      scroller: "body",
      trigger: ".r .skill",
      scrub: 2,
      start: "top 90%",
      end: "top 50%",
    },
    x: 300,
    opacity: 0,
    stagger: 0.3,
  });
  gsap.from(".technologies img", {
    scrollTrigger: {
      scroller: "body",
      trigger: ".technologies img",
      scrub: 2,
      start: "top 90%",
      end: "top 50%",
      // markers:true
    },
    rotateX: "30deg",
    // opacity: 0,
  });
}

function page4() {
  gsap.from(".portf .page-heading", {
    scrollTrigger: {
      scroller: "body",
      trigger: ".portf .page-heading",
      scrub: 2,
      start: "top 80%",
      end: "top 60%",
    },
    x: -200,
    opacity: 0,
  });
  gsap.from(".portf .page-subheading", {
    scrollTrigger: {
      scroller: "body",
      trigger: ".portf .page-subheading",
      scrub: 2,
      start: "top 80%",
      end: "top 60%",
    },
    x: 300,
    opacity: 0,
  });
  // gsap.from(".portfolio-btns", {
  //   scrollTrigger: {
  //     scroller: "body",
  //     trigger: ".portfolio-btns ul .list",
  //     scrub: 2,
  //     start: "top 80%",
  //     end: "top 40%",
  //     markers:true
  //   },
  //   y: -30,
  //   // x: -50,
  //   opacity: 0,
  //   stagger: 0.3,
  //   ease: "none",
  // });
  // gsap.from(".p-card", {
  //   scrollTrigger: {
  //     scroller: "body",
  //     trigger: ".portfolio-btns .list",
  //     scrub: 2,
  //     start: "top 80%",
  //     end: "top 40%",
  //     // markers:true
  //   },
  //   rotateY: "90deg",
  //   stagger: 1,
  //   duration: 2,
  // });
}
function page5() {
  gsap.from("#contact-me-page .page-heading", {
    scrollTrigger: {
      scroller: "body",
      trigger: "#contact-me-page .page-heading",
      scrub: 2,
      start: "top 80%",
      end: "top 60%",
    },
    x: -200,
    opacity: 0,
  });

  gsap.from("#contact-me-page .page-subheading", {
    scrollTrigger: {
      scroller: "body",
      trigger: "#contact-me-page .page-subheading",
      scrub: 2,
      start: "top 80%",
      end: "top 60%",
    },
    x: 300,
    opacity: 0,
  });

  // Animate contact sections
  gsap.from(".c-cards", {
    scrollTrigger: {
      scroller: "body",
      trigger: ".c-cards",
      start: "top 90%",
      end: "top 70%",
      scrub: 1,
    },
    x: -50,
    opacity: 0,
  });

  // Animate contact cards with staggered effect
  gsap.from(".cm-card", {
    scrollTrigger: {
      scroller: "body",
      trigger: ".cm-card",
      start: "top 90%",
      end: "top 70%",
      scrub: 1,
    },
    y: 30,
    opacity: 0,
    stagger: 0.2,
  });

  // Animate form
  gsap.from(".cform", {
    scrollTrigger: {
      scroller: "body",
      trigger: ".cform",
      start: "top 90%",
      end: "top 70%",
      scrub: 1,
    },
    x: 50,
    opacity: 0,
  });

  // Animate map
  gsap.from(".map-container", {
    scrollTrigger: {
      scroller: "body",
      trigger: ".map-container",
      start: "top 90%",
      end: "top 60%",
      scrub: 1,
    },
    y: 30,
    opacity: 0,
    scale: 0.95,
  });

  // Animate map heading
  gsap.from(".map-heading", {
    scrollTrigger: {
      scroller: "body",
      trigger: ".map-container",
      start: "top 85%",
      end: "top 65%",
    },
    y: -20,
    opacity: 0,
    delay: 0.3,
    duration: 0.8,
    ease: "power2.out"
  });

  // Animate map iframe with a bounce effect
  gsap.from(".embed-map-frame", {
    scrollTrigger: {
      scroller: "body",
      trigger: ".map-container",
      start: "top 85%",
      end: "top 65%",
    },
    scale: 0.8,
    opacity: 0.5,
    delay: 0.5,
    duration: 1,
    ease: "elastic.out(1, 0.5)"
  });
}

function page6() {
  // Experience page animations
  gsap.from("#experience-page .page-heading", {
    scrollTrigger: {
      scroller: "body",
      trigger: "#experience-page .page-heading",
      scrub: 2,
      start: "top 80%",
      end: "top 60%",
    },
    x: -200,
    opacity: 0,
  });

  gsap.from("#experience-page .page-subheading", {
    scrollTrigger: {
      scroller: "body",
      trigger: "#experience-page .page-subheading",
      scrub: 2,
      start: "top 80%",
      end: "top 60%",
    },
    x: 300,
    opacity: 0,
  });

  // Animate timeline
  gsap.from(".timeline::before", {
    scrollTrigger: {
      scroller: "body",
      trigger: ".timeline",
      start: "top 80%",
      end: "bottom 60%",
      scrub: 1,
    },
    height: 0,
    ease: "power1.inOut",
  });

  // Animate timeline items with staggered effect
  gsap.from(".timeline-item", {
    scrollTrigger: {
      scroller: "body",
      trigger: ".timeline",
      start: "top 80%",
      end: "bottom 60%",
      scrub: 1,
    },
    opacity: 0,
    y: 50,
    stagger: 0.3,
  });

  // Animate timeline dots
  gsap.from(".timeline-dot", {
    scrollTrigger: {
      scroller: "body",
      trigger: ".timeline",
      start: "top 80%",
      end: "bottom 60%",
      scrub: 1,
    },
    scale: 0,
    opacity: 0,
    stagger: 0.3,
  });
}

function page7() {
  // Certifications page animations
  gsap.from("#certifications-page .page-heading", {
    scrollTrigger: {
      scroller: "body",
      trigger: "#certifications-page .page-heading",
      scrub: 2,
      start: "top 80%",
      end: "top 60%",
    },
    x: -200,
    opacity: 0,
  });

  gsap.from("#certifications-page .page-subheading", {
    scrollTrigger: {
      scroller: "body",
      trigger: "#certifications-page .page-subheading",
      scrub: 2,
      start: "top 80%",
      end: "top 60%",
    },
    x: 300,
    opacity: 0,
  });

  // Animate certification cards with staggered effect - using one-time animation instead of scrub
  let certCards = gsap.utils.toArray(".cert-card");
  certCards.forEach((card, index) => {
    gsap.set(card, { opacity: 0, y: 50 });

    ScrollTrigger.create({
      trigger: card,
      start: "top 85%",
      onEnter: () => {
        gsap.to(card, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.1,
          ease: "power2.out"
        });
      },
      once: true
    });
  });
}

function page8() {
  // Achievements page animations
  gsap.from("#achievements-page .page-heading", {
    scrollTrigger: {
      scroller: "body",
      trigger: "#achievements-page .page-heading",
      scrub: 2,
      start: "top 80%",
      end: "top 60%",
    },
    x: -200,
    opacity: 0,
  });

  gsap.from("#achievements-page .page-subheading", {
    scrollTrigger: {
      scroller: "body",
      trigger: "#achievements-page .page-subheading",
      scrub: 2,
      start: "top 80%",
      end: "top 60%",
    },
    x: 300,
    opacity: 0,
  });

  // Animate achievement cards with staggered effect - using one-time animation
  let achievementCards = gsap.utils.toArray(".achievement-card");
  achievementCards.forEach((card, index) => {
    // Set initial state
    gsap.set(card, { opacity: 0, y: 30, scale: 0.9 });

    // Create one-time animation on scroll
    ScrollTrigger.create({
      trigger: card,
      start: "top 85%",
      onEnter: () => {
        // Animate card
        gsap.to(card, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          delay: index * 0.1,
          ease: "power2.out"
        });

        // Animate icon separately
        let icon = card.querySelector(".achievement-icon");
        gsap.fromTo(icon,
          { opacity: 0, scale: 0 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            delay: index * 0.1 + 0.2,
            ease: "back.out(1.7)"
          }
        );
      },
      once: true
    });
  });
}

page1();
page2();
page3();
page4();
page5();
page6();
page7();
page8();

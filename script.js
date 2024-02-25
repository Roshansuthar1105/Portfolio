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
    if (top >= offset && top < offset + height) {
      for (let j = 0; j < navlist.length; j++) {
        Imgs[j].src = ImgLight[j];
        navlist[j].classList.remove("active-li");
      }
      let index = ids.indexOf(id);
      index++;
      // console.log(index)
      // console.log(top , offset , height , id);
      Imgs[index].src = ImgDark[index];
      navlist[index].classList.add("active-li");
    }
  });
};

window.addEventListener("change", () => {
  console.log("width is ", window.innerWidth);
});
console.log("width is ", window.innerWidth);

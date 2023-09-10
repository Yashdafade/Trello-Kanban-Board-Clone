//for sidebar openeing and closing
let opensidebar1 = document.getElementById("output")

let opensidebar2 = document.getElementById("open-sidebar")

let sidebar1 = document.getElementById("sidebar")

let closesidebar1 = document.getElementById("closesidebar")

let closesidebar2 = document.getElementById("btn1")

opensidebar1.addEventListener("click", () => {
  sidebar1.style.transition = "0.5s ease"
  sidebar1.style.transform = "translate(0px)"
})

opensidebar2.addEventListener("click", () => {
  sidebar1.style.transition = "0.5s ease"
  sidebar1.style.transform = "translate(0px)"
})

closesidebar1.addEventListener("click", () => {
  sidebar1.style.transform = "translate(-250px)"
})

closesidebar2.addEventListener("click", () => {
  sidebar1.style.transform = "translate(-250px)"
})

//for displaying input name

let trg1 = document.getElementById("target")

let btn1 = document.getElementById("btn1")


function fn1() {
  opensidebar1.innerHTML = trg1.value;
}

btn1.addEventListener("click", fn1)

const name1 = document.querySelector("#name1")
const mybutton = document.querySelector(".btnlist")
const list = document.querySelector(".container ul")

mybutton.addEventListener('click', (e) => {
  if (name1.value != "") {
    e.preventDefault();

    const myli = document.createElement('li')
    myli.innerHTML = name1.value;
    list.appendChild(myli);

    const mySpan = document.createElement('span')
    mySpan.innerHTML = 'x';
    myli.appendChild(mySpan)
  }

  const close = document.querySelectorAll('span')
  for(let i = 0;i<close.length;i++){
    close[i].addEventListener('click', ()=>{
      close[i].parentElement.style.opacity = 0;
      setTimeout(()=>{
        close[i].parentElement.style.display = "none";
      },500)
    })
  }
})

const name2 = document.querySelector("#name2")
const mybutton2 = document.querySelector(".btnlist2")
const list2 = document.querySelector(".container2 ul")

mybutton2.addEventListener('click', (e) => {
  if (name2.value != "") {
    e.preventDefault();

    const myli = document.createElement('li')
    myli.innerHTML = name2.value;
    list2.appendChild(myli);

    const mySpan = document.createElement('span')
    mySpan.innerHTML = 'x';
    myli.appendChild(mySpan)
  }

  const close = document.querySelectorAll('span')
  for(let i = 0;i<close.length;i++){
    close[i].addEventListener('click', ()=>{
      close[i].parentElement.style.opacity = 0;

      setTimeout(()=>{
        close[i].parentElement.style.display = "none";
      },500)
    })
  }
})

const name3 = document.querySelector("#name3")
const mybutton3 = document.querySelector(".btnlist3")
const list3 = document.querySelector(".container3 ul")

mybutton3.addEventListener('click', (e) => {
  if (name3.value != "") {
    e.preventDefault();

    const myli = document.createElement('li')
    myli.innerHTML = name3.value;
    list3.appendChild(myli);

    const mySpan = document.createElement('span')
    mySpan.innerHTML = 'x';
    myli.appendChild(mySpan)
  }

  const close = document.querySelectorAll('span')
  for(let i = 0;i<close.length;i++){
    close[i].addEventListener('click', ()=>{
      close[i].parentElement.style.opacity = 0;
      
      setTimeout(()=>{
        close[i].parentElement.style.display = "none";
      },500)
    })
  }
})

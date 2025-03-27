// slider=document.querySelector(".sliderimg")
// document.querySelector(".slidertitle").addEventListener("click",function(){
//     slider.src="./img/gift.png"
// })
const wrapper=document.querySelector(".sliderwrapper")
const menuitems=document.querySelectorAll(".menuitem")
const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];  
let choosenproduct=products[0]
const currentproductimg=document.querySelector(".productimg")
const currentProducttitle = document.querySelector(".producttitle");
const currentProductprice = document.querySelector(".productprice");
const currentProductcolors = document.querySelectorAll(".color");
const currentProductsizes = document.querySelectorAll(".size");
menuitems.forEach((item,index)=>{
    item.addEventListener("click",()=>{
     wrapper.style.transform = `translateX(${-100 * index}vw)`;
     choosenproduct=products[index]
     currentProducttitle.textContent = choosenproduct.title
     currentProductprice.textContent = "$" + choosenproduct.price
     currentproductimg.src = choosenproduct.colors[0].img
     currentProductcolors.forEach((color,index)=>{
        color.style.backgroundColor = choosenproduct.colors[index].code
     })
    });
});
currentProductcolors.forEach((color,index)=>{
    color.addEventListener("click",()=>{
    currentproductimg.src = choosenproduct.colors[index].img
    })
})
currentProductsizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentProductsizes.forEach((size) =>{
              size.style.backgroundColor = "white"
              size.style.color = "black"
        })
        size.style.backgroundColor = "black"
        size.style.color = "white"
    })
})

const productbutton=document.querySelector(".productbutton");
const closes=document.querySelector(".close");
const payment=document.querySelector(".payment");

productbutton.addEventListener("click",()=>{
  payment.style.display = "flex"
})

closes.addEventListener("click",()=>{
    payment.style.display="none";
})



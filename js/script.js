setTimeout(function(){
    $('.loader-bg').fadeToggle();
}, 1500);

let img = document.querySelectorAll(".im");
let numImg = document.querySelectorAll(".li").length;

for (let i = 0 ; i < numImg ; i++ ){
  document.querySelectorAll(".lii")[i].addEventListener('mouseover', function(){
    img[i].style.opacity = "0";
  });
  document.querySelectorAll(".lii")[i].addEventListener('mouseout', function(){
    img[i].style.opacity = "1";
  });

}




// function bigImg(x) {
//     x.style.opacity = "0";
//   }
//   function normalImg(x) {
//     x.style.opacity = "1";
//   }

// document.getElementById('menu').addEventListener('click', function (){
//     document.querySelector("#navMen").classList.toggle("naVmen");
// });

// document.getElementById('contentt').addEventListener('click', function (){
//     document.querySelector("#navMen").classList.toggle("naVmen");
// });

// document.getElementById('aboutt').addEventListener('click', function (){
//     document.querySelector("#navMen").classList.toggle("naVmen");
// });







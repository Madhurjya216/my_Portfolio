// === Navbar menu === //
function myFunction(){
    const btn = document.getElementById('list');
    btn.classList.toggle("nav_res");
}
 
// ====== go to top ======= //
const topBtn = document.getElementById('to_btn');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

const toButton = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}
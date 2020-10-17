const next =document.querySelector(".next");
const prev = document.querySelector(".prev");
const slides = document.querySelectorAll(".testimonial");

let index = 0;
function display(){
  slides.forEach(testimonial =>{
    testimonial.style.display = "none";

  });
  slides[index].style.display ="flex";
}

function nextTestimonial(){
  index++;
  if(index > slides.length - 1){
    index= 0;
  }
  display();
}
function prevslide(){
  index --;
  if (index<0){
    index= slides.length -1;
  }
  display();
}

prev.addEventListener("click",prevslide)
next.addEventListener("click", nextslide)

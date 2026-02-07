const intro = document.getElementById("intro");
const main = document.getElementById("main");
const startBtn = document.getElementById("startBtn");
const music = document.getElementById("music");
const cake = document.getElementById("final-cake");
const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

startBtn.addEventListener("click", () => {
  intro.classList.add("hidden");
  main.classList.remove("hidden");

  if(music){
    music.volume = 0.4;
    music.play().catch(()=>{});
  }

  startBalloons();
  startSlideshow();

  setTimeout(()=>{
    cake.classList.add("show");
    confettiBurst();
  },7000);
});

/* 🎈 Balloons */
function startBalloons(){
  setInterval(()=>{
    const b=document.createElement("div");
    b.className="balloon";
    b.innerHTML="🎈";
    b.style.left=Math.random()*100+"vw";
    b.style.animationDuration=6+Math.random()*5+"s";
    document.body.appendChild(b);
    setTimeout(()=>b.remove(),11000);
  },700);
}

/* 🖼️ Slideshow */
function startSlideshow(){
  setInterval(()=>{
    slides[currentSlide].classList.remove("active");
    currentSlide=(currentSlide+1)%slides.length;
    slides[currentSlide].classList.add("active");
  },2500);
}

/* 🎊 Confetti */
function confettiBurst(){
  for(let i=0;i<150;i++){
    const c=document.createElement("div");
    c.className="confetti";
    c.style.left=Math.random()*100+"vw";
    c.style.background=`hsl(${Math.random()*360},100%,50%)`;
    c.style.animationDuration=2+Math.random()*2+"s";
    document.body.appendChild(c);
    setTimeout(()=>c.remove(),4000);
  }
}

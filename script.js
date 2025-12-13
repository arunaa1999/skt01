const card = document.getElementById("card");
const btn = document.getElementById("actionBtn");
const msg = document.getElementById("msg");

/* 3D Mouse Tilt Effect */
document.addEventListener("mousemove", (e) => {
  const x = (window.innerWidth / 2 - e.clientX) / 25;
  const y = (window.innerHeight / 2 - e.clientY) / 25;

  card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

/* Button Click Animation */
btn.addEventListener("click", () => {
  msg.classList.add("show");

  btn.style.transform = "scale(0.9)";
  setTimeout(() => {
    btn.style.transform = "";
  }, 150);
});

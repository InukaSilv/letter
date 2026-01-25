const envelope = document.getElementById("envelope");
const heart = document.getElementById("heart");

let opened = false;

heart.addEventListener("click", () => {
  if (opened) return;
  opened = true;

  envelope.classList.add("open");
});

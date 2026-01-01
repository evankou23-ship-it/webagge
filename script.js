const msgs = ["Hello", "Still here?", "Okay then"];
let i = 0;

const el = document.getElementById("message-box");
const btn = document.getElementById("msg-btn");

btn.addEventListener("click", () => {
  i = (i + 1) % msgs.length;
  el.textContent = msgs[i];
});

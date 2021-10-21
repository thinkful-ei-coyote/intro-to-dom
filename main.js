console.log("Hello World");
let ul = document.querySelector("ul");
let left = 0;

console.log(document.querySelector("li:last-child"));
let listItems = document.querySelectorAll("li");
for (let element of listItems.values()) {
  console.log(element);
  element = "Woot Woot!";
}

document.body.addEventListener("keydown", (evt) => {
  console.log(evt.key);
  let img = document.querySelector('img');
  switch (evt.key) {
    case "ArrowRight":
      console.log("go right", left);
        img.style.position='relative';
        img.style.left=`${left+=10}px`;
      break;
    case "ArrowLeft":
        img.style.position='relative';
        img.style.left=`${left-=10}px`;
      break;
    case "ArrowUp":
      console.log("go up");
      break;
    case "ArrowDown":
      console.log("go down");
      break;
    default:
      let li = document.createElement("li");
      li.innerHTML = evt.key;
      ul.appendChild(li);
      break;
  }
});

document.querySelector(".go").addEventListener("click", (evt) => {
  console.log("LETS GO");
});

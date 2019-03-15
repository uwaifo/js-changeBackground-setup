//an array of colrs
const colors = ["yellow", "blue", "green", "red", "purple", "white"];
//
const btn = document.getElementById("btn");
//watchout for change on element btn
btn.addEventListener("click", () => {
  let random = Math.floor(Math.random() * colors.length);

  const body = document.body;
  body.style.backgroundColor = colors[random];

  console.log(random, colors[random]);
});

var restart = document.querySelector("#restart")

var tiles = document.querySelectorAll("td")

function clearall() {
  for (var i = 0; i < tiles.length; i++) {
    tiles[i].textContent = ""
  }
}
restart.addEventListener("click", clearall)

function change() {
  if (this.textContent === "") {
    this.textContent = "X"
  }else if (this.textContent === "X") {
    this.textContent = "O"
  }else{
    this.textContent === "";
  };
}


for (var i = 0; i < tiles.length; i++) {
  tiles[i].addEventListener('click', change)
}

var oneblock = document.querySelector('#one')
var twoblock = document.querySelector('#two')
var threeblock = document.querySelector('#three')
var fourblock = document.querySelector('#four')
var fiveblock = document.querySelector('#five')
var sixblock = document.querySelector('#six')
var sevenblock = document.querySelector('#seven')
var eightblock = document.querySelector('#eight')
var nineblock = document.querySelector('#nine')

function swap(item) {
  if (item.textContent === ""){
    item.textContent = "X"
  }else if (item.textContent === "X") {
    item.textContent = "O"
  }else if (item.textContent === "O") {
    item.textContent = null
  }else {
    console.log("something weird");
  }
}

oneblock.addEventListener("click", function(){
  swap(oneblock);
});
twoblock.addEventListener("click", function(){swap(twoblock);});
threeblock.addEventListener("click", function(){swap(threeblock);});
fourblock.addEventListener("click", function(){swap(fourblock);});
fiveblock.addEventListener("click", function(){swap(fiveblock);});
sixblock.addEventListener("click", function(){swap(sixblock);});
sevenblock.addEventListener("click", function(){swap(sevenblock);});
eightblock.addEventListener("click", function(){swap(eightblock);});
nineblock.addEventListener("click", function(){swap(nineblock);});

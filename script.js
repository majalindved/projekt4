// Add active class to the current button (highlight it)
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}


document.getElementById("arrangement").onclick = function () {
    location.href = "arrangementer.html";
};

document.getElementById("arrangement1").onclick = function () {
    location.href = "arrangementer.html";
};

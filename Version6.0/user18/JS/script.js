function changeText() {
    document.getElementById("textChange").innerHTML = "<ul>Thanks for liking my Webpage</u>";
}

function uppercase() {
    var x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
}

  function displayDate() {
    document.getElementById("demo").innerHTML = Date();
  }

  function highlight(x) {
    x.style.background = "blue";
  }

  function page() {
    alert("Page is loaded");
  }
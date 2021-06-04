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

  function botton() {
    document.getElementById("demo").innerHTML = "Hello World";
  }

  function paragraph() {
    document.getElementById("dblclick").innerHTML = "You double clicked!";
  }

  function openWin() {
    window.open("https://www.w3schools.com","_blank","toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=400, height=400");
}
